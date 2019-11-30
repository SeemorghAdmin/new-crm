import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';
import { TicketForDeveloperService } from 'src/app/services/Ticketing/ticket-for-developer.service';

export interface TicketClass {
  developerTicket_ID : number;
  comment: string;
  resiver: string;
  conf : number;
}
@Component({
  selector: 'app-chat-ticket-for-developer',
  templateUrl: './chat-ticket-for-developer.component.html',
  styleUrls: ['./chat-ticket-for-developer.component.css']
})
export class ChatTicketForDeveloperComponent implements OnInit {

  constructor(private api: TicketForDeveloperService, private route: ActivatedRoute, private router: Router) { }
  public Ticket: TicketClass = { developerTicket_ID : 0 , comment: '' , resiver : '' ,conf :0};
  DeveloperTicketId;
  ChatTicketing;
  ta;
  PersonForDropDownList;
  PersonNationalId;
  DangerAlertShow;
  Moshtari;
  role;
  t;
  ngOnInit() {
    this.DeveloperTicketId = this.route.snapshot.paramMap.get('id');
    this.api.getDeveloperTicketChat(this.DeveloperTicketId).subscribe(res => {
      this.ChatTicketing=res;
      this.Moshtari = this.ChatTicketing[0].person.personNational_ID;
      this.api.getPerson().subscribe(res =>{
        this.PersonForDropDownList = res;
      });
    });
    if(parseInt(localStorage.getItem('role')) == 1)
    {
this.t =4;
    }
    if (localStorage.getItem('token') != null) {
      switch (parseInt(localStorage.getItem('role2'))) {
        case 1:
          this.ta = 1;
          break;
        case 2:
          this.ta = 2;
          break;
        case 3:
          this.ta = 3;
          break;
        default:
          break;
      }
    }
  } 
  getName(id) {
    this.PersonNationalId = id;
  }
  post(Ticket)
  {
    if (this.PersonNationalId == null || this.PersonNationalId == 'متقاضی دریافت پیام را انتخاب کنید') {
      this.DangerAlertShow = 1;
    }
    else
    {
      Ticket.developerTicket_ID = this.DeveloperTicketId;
      if (this.PersonNationalId == 'مشتری') {
        Ticket.Resiver = this.Moshtari;
      }
      else {
        Ticket.Resiver = this.PersonNationalId;
        Ticket.Conf = 1;
      }
      this.api.postTicketChat(Ticket).subscribe(res => {
       
      });   
      this.api.putResiver(Ticket).subscribe(res => {
        this.router.navigate(['/owner/home/app-show-ticket-for-owners-manager']);
      });  
    }
  }
  postt(Ticket)
  {
    Ticket.developerTicket_ID = this.DeveloperTicketId;
    this.api.postTicketChat(Ticket).subscribe(res =>{
    });
    this.api.putResiver(Ticket).subscribe(res => {
      this.router.navigate(['/owner/home/app-ticket-for-developer']);
    });  
  }

}

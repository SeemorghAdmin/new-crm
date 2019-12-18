import { Component, OnInit } from '@angular/core';
import { TicketingService } from './../../../services/Ticketing/Ticketing.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

export interface TicketClass {
  ticket_ID : number;
  comment: string;
  resiver: string;
  conf : number;
}
@Component({
  selector: 'ChatTicket',
  templateUrl: './Chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatTicketComponent implements OnInit {
  TicketId;
  ChatTicketing: any=[];
  t;
  ta;
  us;
  PersonNationalId;
  PersonForDropDownList: any=[];
  DangerAlertShow;
  Moshtari;
  informationFirstName;
  informationLastName;
  informationEmail;
  Test;
  Uni;
  city;
  state;
  url;
  constructor(private api: TicketingService, private route: ActivatedRoute, private router: Router) { }
  public Ticket: TicketClass = { ticket_ID : 0 , comment: '' , resiver : '' ,conf :0};
  ngOnInit() {
    this.TicketId = this.route.snapshot.paramMap.get('id');
    this.api.getTicketChat(this.TicketId).subscribe(res => {
      this.ChatTicketing = res;
      this.us = this.ChatTicketing[0].ticket.title;
      this.Moshtari = this.ChatTicketing[0].person.personNational_ID;
      this.informationFirstName = this.ChatTicketing[0].person.firstName;
      this.informationLastName = this.ChatTicketing[0].person.lastName;
      this.informationEmail = this.ChatTicketing[0].person.email;
      this.api.getInformation(this.Moshtari).subscribe(res =>{
        this.Test=res;
        this.Uni=this.Test.uniName;
        this.city=this.Test.uniCity;
        this.state=this.Test.uniState;
      });
      if (this.ChatTicketing[0].ticket.active == false) {
        this.t = 1;
      }
    });
    this.api.getPerson().subscribe(res => {
      this.PersonForDropDownList = res;
    });
    if (localStorage.getItem('token') != null) {
      switch (parseInt(localStorage.getItem('role'))) {
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
  post(Ticket) {
    if (this.PersonNationalId == null || this.PersonNationalId == 'متقاضی دریافت پیام را انتخاب کنید') {
      this.DangerAlertShow = 1;
    }
    else {
      Ticket.ticket_ID = this.TicketId;
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
        this.router.navigate(['/owner/home/ShowTickets']);
      });

    }
  }
  DiactiveChat() {
    this.api.putDiactiveTicket(this.TicketId).subscribe(res => {
      if (res == true) {
        window.location.reload();
      }
    });
  }
  postt(Ticket) {
    Ticket.ticket_ID = this.TicketId;
    this.api.putResiver(Ticket).subscribe(res => {
    });
    this.api.postTicketChat(Ticket).subscribe(res => {
      if (res == true) {
        this.router.navigate(['/cust/home/cust-Show-User-Ticket']);
      }
    });
  }
}

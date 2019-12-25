import { Component, OnInit } from '@angular/core';
import { TicketingService } from './../../../services/Ticketing/Ticketing.service';
import {  Router } from '@angular/router';
@Component({
  selector: 'Show-User-Ticket',
  templateUrl: './Show-User-Ticket.html',
  styleUrls: ['./Show-User-Ticket.css']
})
export class ShowUserTicketComponent implements OnInit {

  constructor(private api: TicketingService,private router:Router) { }
  UserTicket;
  UserDiactiveTicket;
  t = 1;
  name;
  namee;
  ngOnInit() {
    this.api.getTicket().subscribe(res => {
      this.UserTicket = res;
      this.name = this.UserTicket[0].person.firstName;
      this.namee = this.UserTicket[0].person.lastName;
    });
    this.api.getDiactiveTicket().subscribe(res => {
      this.UserDiactiveTicket = res;
    });
  }
  faal() {
    this.t = 1;
  }
  gheyrfaal() {
    this.t = 2;
  }
  get(index)
  {
    if(index %2 == 0)
    {
      return '#eeeded';
    }
  }
  pagenav(id) {
    this.api.putSeen(id).subscribe(res => {
      if (res == true) {
        this.router.navigateByUrl('/cust/home/ChatTicket/' + id);
      }
    });

  }
}

import { Component, OnInit } from '@angular/core';
import { TicketingService } from './../../../services/Ticketing/Ticketing.service';
@Component({
  selector: 'Show-User-Ticket',
  templateUrl: './Show-User-Ticket.html',
  styleUrls: ['./Show-User-Ticket.css']
})
export class ShowUserTicketComponent implements OnInit {

  constructor(private api: TicketingService) { }
UserTicket;
UserDiactiveTicket;
t=1;
name;
namee;
  ngOnInit() {
    this.api.getTicket().subscribe(res => {
      this.UserTicket = res;
     this.name= this.UserTicket[0].person.firstName;
     this.namee=this.UserTicket[0].person.lastName;
      console.log(res);
    });
    this.api.getDiactiveTicket().subscribe(res => {
      this.UserDiactiveTicket = res;
      console.log(res);
    });
  }
  faal()
  {
    this.t=1;
  }
  gheyrfaal()
  {
    this.t=2;
  }
}

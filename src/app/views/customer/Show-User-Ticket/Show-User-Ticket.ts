import { Component, OnInit } from '@angular/core';
import { TicketingService } from './../../../services/Ticketing/Ticketing.service';
@Component({
  selector: 'Show-User-Ticket',
  templateUrl: './Show-User-Ticket.html',
})
export class ShowUserTicketComponent implements OnInit {

  constructor(private api: TicketingService) { }
UserTicket;
UserDiactiveTicket;
  ngOnInit() {

    this.api.getTicket().subscribe(res => {
      this.UserTicket = res;
      console.log(res);
    });
    this.api.getDiactiveTicket().subscribe(res => {
      this.UserDiactiveTicket = res;
      console.log(res);
    });


  }
}

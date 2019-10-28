import { Component, OnInit } from '@angular/core';
import { TicketingService } from './../../../../services/Ticketing/Ticketing.service';
@Component({
  selector: 'app-show-tickets',
  templateUrl: './show-tickets.component.html',
  styleUrls: ['./show-tickets.component.css']
})
export class ShowTicketsComponent implements OnInit {

  constructor(private api: TicketingService) { }
AllTickets;
  ngOnInit() {
    this.api.getAllTickets().subscribe(res => {
      this.AllTickets = res;
      console.log(res);
    });
  }

}

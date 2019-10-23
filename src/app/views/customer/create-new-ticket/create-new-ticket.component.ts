import { Component, OnInit } from '@angular/core';
import { TicketingService } from './../../../services/Ticketing/Ticketing.service';

@Component({
  selector: 'app-create-new-ticket',
  templateUrl: './create-new-ticket.component.html',
  styleUrls: ['./create-new-ticket.component.css']
})
export class CreatNewTicketComponent implements OnInit {
Service ;
getServiceTypeId;
  constructor(private api: TicketingService) {}

  ngOnInit() {
    this.api.getService().subscribe(res => {
      this.Service = res;
      console.log(res);
    });
  }
  Ticket={};
  ServiceTypeNumber(id)
  {
this.getServiceTypeId=id;
console.log(this.getServiceTypeId);
  }
  post(Ticket)
  {
    Ticket.PersonNational_ID="4180109123";
    Ticket.services_ID=this.getServiceTypeId;
    this.api.postTicket(Ticket).subscribe(res =>{
console.log(res);
    });
console.log(Ticket);
  }
}

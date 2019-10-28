import { Component, OnInit } from '@angular/core';
import { TicketingService } from './../../../services/Ticketing/Ticketing.service';
import { ActivatedRoute } from '@angular/router' ;
import { Router } from '@angular/router';
@Component({
  selector: 'ChatTicket',
  templateUrl: './Chat.component.html'
})
export class ChatTicketComponent implements OnInit {
TicketId;
ChatTicketing;
Ticket={};
t;
  constructor(private api: TicketingService, private route: ActivatedRoute ,private router : Router) {}

  ngOnInit() {
  this.TicketId=this.route.snapshot.paramMap.get('id');
  this.api.getTicketChat(this.TicketId).subscribe(res =>{
 this.ChatTicketing=res;
 if(this.ChatTicketing[0].ticket.active == false)
 {
this.t=1;
console.log(this.t);
 }
 console.log(res);
  });
  }

post(Ticket)
{
Ticket.Ticket_ID=this.TicketId;
this.api.postTicketChat(Ticket).subscribe(res =>{
if(res == true)
{
    window.location.reload();
}
});
}

DiactiveChat()
{
this.api.putDiactiveTicket(this.TicketId).subscribe(res =>{
if(res == true)
{
   window.location.reload();
}
});
}

}

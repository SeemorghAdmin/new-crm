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
us;
PersonNationalId;
PersonForDropDownList={};
DangerAlertShow;
Moshtari;
  constructor(private api: TicketingService, private route: ActivatedRoute ,private router : Router) {}
  ngOnInit() {
  this.TicketId=this.route.snapshot.paramMap.get('id');
  this.api.getTicketChat(this.TicketId).subscribe(res =>{
 this.ChatTicketing=res;
 this.us= this.ChatTicketing[0].ticket.title;
this.Moshtari=this.ChatTicketing[0].person.personNational_ID;
console.log(this.us);
 if(this.ChatTicketing[0].ticket.active == false)
 {
this.t=1;
 }
});
this.api.getPerson().subscribe(res =>{
this.PersonForDropDownList=res;
});
}
getName(id)
{
this.PersonNationalId =id;
console.log(this.PersonNationalId);
}

post(Ticket)
{
if(this.PersonNationalId != null || this.PersonNationalId == 'متقاضی دریافت پیام را انتخاب کنید')
{
  this.DangerAlertShow=1;
}
else
{
Ticket.Ticket_ID=this.TicketId;
if(this.PersonNationalId == 'مشتری')
{
Ticket.Resiver =this.Moshtari;
} 
else
{
  Ticket.Resiver = this.PersonNationalId;
  Ticket.Conf = 1;
}
this.api.postTicketChat(Ticket).subscribe(res =>{
if(res == true)
{
    window.location.reload();
}
});
}
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
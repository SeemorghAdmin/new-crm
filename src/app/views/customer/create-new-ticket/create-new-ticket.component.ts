import { Component, OnInit } from '@angular/core';
import { TicketingService } from './../../../services/Ticketing/Ticketing.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create-new-ticket',
  templateUrl: './create-new-ticket.component.html',
  styleUrls: ['./create-new-ticket.component.css']
})
export class CreatNewTicketComponent implements OnInit {
Service ;
getServiceTypeId;
t;
  constructor(private api: TicketingService,private toastr: ToastrService) {}

  ngOnInit() {
    this.api.getService().subscribe(res => {
      this.Service = res;
    });
  }
  Ticket={};
  ServiceTypeNumber(id)
  {
this.getServiceTypeId=id;
  }
  post(Ticket)
  {
    if(this.getServiceTypeId >0)
    {
      if(Ticket.title != null)
      {
        if(Ticket.Comment !=null)
        {
    Ticket.services_ID=this.getServiceTypeId;
    this.api.postTicket(Ticket).subscribe(res =>{
if(res == true)
{
  this.toastr.success('درخواست شما ثبت شد از طریق صفحه پیگیری درخوست ها میتوانید از آخرین وضعیت درخواست خود مطلع شوید');
  Ticket.title ='';
  Ticket.status=null;
  Ticket.Comment='';

}
    });
  }
  else
  {
    this.t=3;
  }
  }
  else
  {
    this.t=2;
  }
  }
  else
  {
    this.t=1;
  }
  }
}

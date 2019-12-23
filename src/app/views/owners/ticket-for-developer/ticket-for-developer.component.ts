import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { TicketForDeveloperService } from 'src/app/services/Ticketing/ticket-for-developer.service';
import { Router } from '@angular/router';

export interface TicketClass {
  comment: string;
  status: string;
}
@Component({
  selector: 'app-ticket-for-developer',
  templateUrl: './ticket-for-developer.component.html',
  styleUrls: ['./ticket-for-developer.component.css']
})

export class TicketForDeveloperComponent implements OnInit {

  constructor(private api: TicketForDeveloperService, private toastr: ToastrService, private router: Router) { }
  public Ticket: TicketClass = { comment: '', status: '' };
  AllTickets;
  t;
  ngOnInit() {
    this.api.getTicket().subscribe(res => {
      this.AllTickets = res;
    });
  }
  post(Ticket) {
    if (Ticket.comment != null && Ticket.comment != '') {
      this.api.postTicket(Ticket).subscribe(res => {
        if (res == true) {
          this.toastr.success('درخواست شما ثبت شد از طریق لیست انتهای صفحه، میتوانید از آخرین وضعیت درخواست خود مطلع شوید');
          Ticket.comment = '';
          this.ngOnInit();
        }
      });
    }
    else
    {
      this.t=3;
    }
  }
  get(index) {
    if (index % 2 == 0) {
      return '#eeeded';
    }

  }
  pagenav(id) {
    this.api.putSeen(id).subscribe(res =>{
      this.router.navigateByUrl('/owner/home/app-chat-ticket-for-developer/' + id);
    });
}
}

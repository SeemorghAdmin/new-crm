import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TicketingService } from './../../../../services/Ticketing/Ticketing.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-show-tickets',
  templateUrl: './show-tickets.component.html',
  styleUrls: ['./show-tickets.component.css']
})
export class ShowTicketsComponent implements OnInit {
  t;
  constructor(private api: TicketingService, private router: Router) { }
  AllTickets;
  //دریافت اطلاعات از سمت سرور
  ////دریافت اطلاعات تعداد تیکت ها
  ngOnInit() {
    this.api.getCountTicket();
    this.api.getAllTickets().subscribe(res => {
      this.AllTickets = res;
    });

  }
  //ویرایش پیام های خوانده نشده به خوانده شده
  pagenav(id) {
    this.api.putSeen(id).subscribe(res => {
      if (res == true) {
        this.router.navigateByUrl('/owner/home/ChatTicket/' + id);
      }
    });

  }
  getcolor(item)
  {



  }
  //ایجاد متد برای استایل دهی به تگ های اچ تی ام ال
  get(index)
  {
    if(index %2 == 0)
    {
      return '#eeeded';
    }
  }

}

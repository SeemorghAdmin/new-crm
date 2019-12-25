import { Component, OnInit } from '@angular/core';
import { TicketForDeveloperService } from 'src/app/services/Ticketing/ticket-for-developer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-ticket-for-owners-manager',
  templateUrl: './show-ticket-for-owners-manager.component.html',
  styleUrls: ['./show-ticket-for-owners-manager.component.css']
})
export class ShowTicketForOwnersManagerComponent implements OnInit {

  constructor(private api: TicketForDeveloperService, private router: Router) { }
  AllTickets;
  ngOnInit() {
    //دریات اطلاعات از سمت سرور
this.api.getTicketForOwnerManager().subscribe(res => {
  this.AllTickets=res;
});
  }
//ایجاد یک متد برای استایل دی به تگ های اچ تی ام ال
  get(index) {
    if (index % 2 == 0) {
      return '#eeeded';
    }
  }
  ////ارسال اطلاعات به سمت سرور برای ویرایش و همچنین هدایت کاربر به صفحه مناسب
  pagenav(id) {
    this.api.putSeen(id).subscribe(res =>{
      this.router.navigateByUrl('/owner/home/app-chat-ticket-for-developer/' + id);
    });

  }
}

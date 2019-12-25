import { Injectable } from '@angular/core';
import { ConstantsService } from '../constants/constants.service';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TicketForDeveloperService {

  constructor(private http: HttpClient, private constants: ConstantsService) { }
  readonly BaseURI = this.constants.baseApiUrlNc;
//ارسال اطلاعات تیکت ها به سمت سرور
  postTicket(ticket)
  {
    return this.http.post(this.BaseURI + '/DeveloperTicket/' , ticket);
  }
  //خواندن اطلاعات تیتک ها از سمت سرور
  getTicket()
{
  return this.http.get(this.BaseURI + '/GetDeveloperTicket');
}
//نمایش اطلاعات تیکت ها برای مدیر خاشع
getTicketForOwnerManager()
{
  return this.http.get(this.BaseURI + '/GetDeveloperTicket/TicketForOwnerManager');
}
//نمایش اطلاعات گفت و گو های هر تیکت
getDeveloperTicketChat(id)
{
  return this.http.get(this.BaseURI + '/GetDeveloperTicket/DeveloperTcketChat?id=' + id);
}
//نمایش برنامه نویسان  برای پر کردن دراپ دان لیست 
getPerson()
{
  return this.http.get(this.BaseURI + '/Person/getDeveloperPerson');
}
//ارسال گفت و گو های جدید ایجاد شده در هر تیکت به سمت سرور
postTicketChat(ticket)
{
  return this.http.post(this.BaseURI + '/DeveloperTicket/AddDeveloperTicketChat/' , ticket);
}
//ویرایش ای دی فردی که تیکت ها باید برای ان ارسال شوند
putResiver(Ticket)
{
  return this.http.put(this.BaseURI + '/DeveloperTicket/'+Ticket.developerTicket_ID ,Ticket );
}
//تغییر وضعیت گف و گو ها  از خوانده نشده به خوانده شده
putSeen(id)
{
  return this.http.put(this.BaseURI + '/DeveloperTicket/Putseen?id='+id ,id );
}
}

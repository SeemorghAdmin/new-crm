import { Injectable } from '@angular/core';
import { FormBuilder} from '@angular/forms';
import { HttpClient } from "@angular/common/http";
import { ConstantsService } from '../constants/constants.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TicketingService {
  constructor(private fb: FormBuilder, private http: HttpClient, private constants: ConstantsService) { }
  readonly BaseURI = this.constants.baseApiUrlNc;
  readonly BaseURL = this.constants.baseApiUrlEc;
  private TicketCount = new Subject <any> ();
  TicketCountSelected = this.TicketCount.asObservable();
  //خواندن اطلاعات سرویس ها از سمت سرور برای نمایش و انتخاب کاربر
getService()
{
  return this.http.get(this.BaseURI + '/CreatTicet/'+3);
}
//ارسال اطلاعات مربوط به اضافه کردن تیکت جدید
postTicket(ticket)
{
  return this.http.post(this.BaseURI + '/CreatTicet/' , ticket);
}
//نمایش اطلاعات مربوط به تیکت ها
getTicket()
{
  return this.http.get(this.BaseURI + '/GetTicket');
}
//نمایش تیکت های غیر فعال
getDiactiveTicket()
{
  return this.http.get(this.BaseURI + '/GetTicket/DiactiveTicket');
}
//نمایش گفت و گو های موجود در هر تیکت
getTicketChat(id)
{
  return this.http.get(this.BaseURI + '/ChatTicketing/' + id);
}
//ارسال اطلاعات مربوط به اضافه کردن گفت و گوی جدید در هر تیکت
postTicketChat(ticket)
{
  return this.http.post(this.BaseURI + '/ChatTicketing/' , ticket);
}
////ویرایش تیکت های از فعال به غیر فعال
putDiactiveTicket(id)
{
  return this.http.put(this.BaseURI + '/CreatTicet/'+id ,id);
}
//نمایش تمامی تیکت های موجود
getAllTickets()
{
  return this.http.get(this.BaseURI + '/GetTicket/AllTickets');
}
//نمایش کارمندان خاشع برای نمایش در دراپ دان لیست 
getPerson()
{
  return this.http.get(this.BaseURI + '/Person/getPersonAll');
}
//ویرایش ایدی فردی که قرار است تیکت به ان ارسال شود
putResiver(Ticket)
{
  return this.http.put(this.BaseURI + '/GetTicket/'+Ticket.ticket_ID ,Ticket );
}
//ویرایش پیام خوانده نشده به خوانده شده
putSeen(id)
{
  return this.http.put(this.BaseURI + '/ChatTicketing/'+id ,id );
}
//نمایش اطلاعات 
getInformation(id)
{
  return this.http.get(this.BaseURL + '/get-login-info.jsp?id='+id);
}
//نمایش تعداد تیکت ها در منو
getCountTicket()
{
  return this.http.get(this.BaseURI + '/GetTicket/countTicket').subscribe(res =>{
this.TicketCount.next(res);
  });
}
}

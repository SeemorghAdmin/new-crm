import { Injectable } from '@angular/core';
import { FormBuilder} from '@angular/forms';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TicketingService {

  constructor(private fb: FormBuilder, private http: HttpClient) { }
 
  readonly BaseURI = 'http://185.79.99.245/new-crm-api/api';

  getService()
{
  return this.http.get(this.BaseURI + '/CreatTicet/'+3);
}
postTicket(ticket)
{
  return this.http.post(this.BaseURI + '/CreatTicet/' , ticket);
}
getTicket()
{
  return this.http.get(this.BaseURI + '/GetTicket');
}

getDiactiveTicket()
{
  return this.http.get(this.BaseURI + '/GetTicket/DiactiveTicket');
}

getTicketChat(id)
{
  return this.http.get(this.BaseURI + '/ChatTicketing/' + id);
}
postTicketChat(ticket)
{
  return this.http.post(this.BaseURI + '/ChatTicketing/' , ticket);
}
putDiactiveTicket(id)
{
  return this.http.put(this.BaseURI + '/CreatTicet/'+id ,id );
}
getAllTickets()
{
  return this.http.get(this.BaseURI + '/GetTicket/AllTickets');
}
getPerson()
{
  return this.http.get(this.BaseURI + '/Person/getPersonAll');
}
putResiver(Ticket)
{
  return this.http.put(this.BaseURI + '/GetTicket/'+Ticket.ticket_ID ,Ticket );
}
putSeen(id)
{
  return this.http.put(this.BaseURI + '/ChatTicketing/'+id ,id );
}
}

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

  postTicket(ticket)
  {
    return this.http.post(this.BaseURI + '/DeveloperTicket/' , ticket);
  }
  getTicket()
{
  return this.http.get(this.BaseURI + '/GetDeveloperTicket');
}
getTicketForOwnerManager()
{
  return this.http.get(this.BaseURI + '/GetDeveloperTicket/TicketForOwnerManager');
}
getDeveloperTicketChat(id)
{
  return this.http.get(this.BaseURI + '/GetDeveloperTicket/DeveloperTcketChat?id=' + id);
}
getPerson()
{
  return this.http.get(this.BaseURI + '/Person/getDeveloperPerson');
}
postTicketChat(ticket)
{
  return this.http.post(this.BaseURI + '/DeveloperTicket/AddDeveloperTicketChat/' , ticket);
}
putResiver(Ticket)
{
  return this.http.put(this.BaseURI + '/DeveloperTicket/'+Ticket.developerTicket_ID ,Ticket );
}
putSeen(id)
{
  return this.http.put(this.BaseURI + '/DeveloperTicket/Putseen?id='+id ,id );
}
}

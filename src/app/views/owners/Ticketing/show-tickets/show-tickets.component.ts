import { Component, OnInit } from '@angular/core';
import { TicketingService } from './../../../../services/Ticketing/Ticketing.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-show-tickets',
  templateUrl: './show-tickets.component.html',
  styleUrls: ['./show-tickets.component.css']
})
export class ShowTicketsComponent implements OnInit {
t;
  constructor(private api: TicketingService ,private router: Router) { }
AllTickets;
  ngOnInit() {
    this.api.getAllTickets().subscribe(res => {
      this.AllTickets = res;    
      console.log(res);
    });
  }
  pagenav(id)
  {
  this.api.putSeen(id).subscribe(res =>{
      if(res == true)
      {
        this.router.navigateByUrl('/owner/home/ChatTicket/'+id);
      }
    });
  
  }
  getcolor(item)
  {
    
  
   
  }
  get(index)
  {
    console.log(index);
    if(index %2 == 0)
    {
      return '#eeeded';
    }
  }

}

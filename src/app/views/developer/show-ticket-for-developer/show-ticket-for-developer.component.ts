import { Component, OnInit } from '@angular/core';
import { TicketForDeveloperService } from 'src/app/services/Ticketing/ticket-for-developer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-ticket-for-developer',
  templateUrl: './show-ticket-for-developer.component.html',
  styleUrls: ['./show-ticket-for-developer.component.css']
})
export class ShowTicketForDeveloperComponent implements OnInit {

  constructor(private api : TicketForDeveloperService,private router:Router) { }
  AllTickets;
  ngOnInit() {
    this.api.getTicketForOwnerManager().subscribe(res => {
      this.AllTickets=res;
    });
  }
  get(index) {
    if (index % 2 == 0) {
      return '#eeeded';
    }
  }
  pagenav(id) {
    this.api.putSeen(id).subscribe(res =>{
      this.router.navigateByUrl('/dev/home/app-chat-ticket-for-developer/' + id);
    });

  }

}

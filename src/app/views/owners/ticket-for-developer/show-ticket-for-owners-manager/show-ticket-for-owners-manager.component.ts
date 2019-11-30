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
this.api.getTicketForOwnerManager().subscribe(res => {
  console.log(res);
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
      this.router.navigateByUrl('/owner/home/app-chat-ticket-for-developer/' + id);
    });
      
  }
}

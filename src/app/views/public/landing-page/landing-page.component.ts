import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TicketingService } from 'src/app/services/Ticketing/Ticketing.service';
import { delay } from 'q';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  query;
  result;
  constructor(private router: Router, private route: ActivatedRoute, private api: TicketingService) { }
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.query = params;
      this.api.postRedirectInformation(this.query).subscribe(res =>{
    this.result=res;
        localStorage.setItem('token',this.result.token );
        localStorage.setItem('role', this.result.role1 );
        (async () => { 
       
  
          await delay(3000);
          switch (this.result.role1)
          {
            case 1:
              this.router.navigateByUrl('/dev/home');
              break;
              case 2:
              this.router.navigateByUrl('/owner/home');
              break;
              case 3:
              this.router.navigateByUrl('/cust/home');
              break;
              case 4:
              this.router.navigateByUrl('/inspeector/home');
              break;
            default:
              break;
          }
   
      })();
     
      });
    });

  }
}

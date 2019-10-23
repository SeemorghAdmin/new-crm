import { Component, OnInit } from '@angular/core';
import { PersonService } from './../../../services/serviceperson/person.service';

@Component({
  selector: 'app-cust-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class CustMainComponent implements OnInit {

  constructor(private service: PersonService) { }

  ngOnInit() {
    this.service.GetUserProfile().subscribe( res =>
      {
        console.log(res)
      });
  }

}

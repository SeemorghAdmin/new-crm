import { Component, OnInit } from '@angular/core';
import { Session } from 'protractor';
import { SessionStorageService } from 'ngx-webstorage';
import { query } from '@angular/animations';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { from } from 'rxjs';

@Component({
  selector: 'app-dev-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class DevMainComponent implements OnInit {


  info;
  person;
  id;

  constructor(private sessionSt: SessionStorageService, private route: ActivatedRoute, private auth: AuthService, private http: HttpClient, private rout: Router) {
    this.route.params.subscribe(params => this.id = params)
  }

  ngOnInit() {
    // console.log(this.id.id);



    this.http.get('http://localhost:8080/nern_test_war_exploded//api/get-login-info.jsp?id=' + this.id.id).subscribe(
      res => {
        this.info = res;
        console.log(this.info);
      });

  }

}

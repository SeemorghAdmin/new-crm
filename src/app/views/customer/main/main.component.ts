import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import { Session } from 'protractor';
import { SessionStorageService } from 'ngx-webstorage';
import { query } from '@angular/animations';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { PersonService } from '../../../services/person/person.service';

@Component({
  selector: 'app-cust-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class CustMainComponent implements OnInit, OnDestroy {

  userType = "Customer"
  fillerNav = Array.from({length: 50}, (_, i) => this.userType + ` Nav Item ${i + 1}`);

  mobileQuery: MediaQueryList;
  info;
  uni;
  id;
  constructor(private sessionSt: SessionStorageService,
    private route: ActivatedRoute, private auth: AuthService, private http: HttpClient,
    private rout: Router, private service: PersonService, changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) { 

      this.mobileQuery = media.matchMedia('(max-width: 600px)');
      this._mobileQueryListener = () => changeDetectorRef.detectChanges();
      // tslint:disable-next-line: deprecation
      this.mobileQuery.addListener(this._mobileQueryListener);
    }

    private _mobileQueryListener: () => void;


  ngOnInit() {

    /* this.sessionSt.store("name","");  */

    this.route.queryParams.subscribe(params => this.id = params.id)
    this.http.get('http://localhost:8080/nern_test_war_exploded//api/get-login-info.jsp?id=' + this.id).subscribe(
      res => {
        this.info = res;
        console.log(this.info);

        if (this.info.isAdmin == true) {

          this.rout.navigate(['/dev/home/', this.id]);

          console.log(this.info);


        }

      }
    )

  }

  ngOnDestroy(): void {
    // tslint:disable-next-line: deprecation
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}

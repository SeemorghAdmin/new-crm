import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { PersonService } from '../../../services/person/person.service';

export interface MenuItems {
  name: string;
  url: string;
}

@Component({
  selector: 'app-cust-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class CustMainComponent implements OnInit, OnDestroy {

  pageType = "پنل کاربری مشترکین شبکه علمی ایران";

  fillerNav: MenuItems[] = [
    { name: "پیگیری درخواست پشتیبانی", url: "/cust/home/cust-Show-User-Ticket" },
    { name: "ثبت درخواست پشتیبانی", url: "/cust/home/cust-creat-new-Ticket" },
  ]; // ایجاد 50 تا آیتم برای نمایش در منو
  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;
  ////////////////// انهتای بخش sidenav

  info;
  uni;
  id;
  opened: boolean;
  constructor(private router: Router,
    private route: ActivatedRoute, private http: HttpClient,
    private rout: Router, changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {

    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    // tslint:disable-next-line: deprecation
    this.mobileQuery.addListener(this._mobileQueryListener);
  }




  ngOnInit() {
  localStorage.setItem('CustomerNationalId','14002812508');
    ////////////////////////////////////////////////// دریافت اطلاعات مشترک از EC
    ////////////////////////////////////////////////// کد توسط ماندانا غلامی
    /* this.sessionSt.store("name","");  */
    // this.route.queryParams.subscribe(params => this.id = params.id)
    // this.http.get('http://localhost:8080/nern_test_war_exploded//api/get-login-info.jsp?id=' + this.id).subscribe(
    //   res => {
    //     this.info = res;
    //     console.log(this.info);

    //     if (this.info.isAdmin == true) {

    //       this.rout.navigate(['/dev/home/', this.id]);

    //       console.log(this.info);


    //     }

    //   }
    // )
    this.opened=true;

  }

  onLogout() {
    localStorage.removeItem('token');
    localStorage.removeItem('role')
    this.router.navigate(['']);
  }

  ngOnDestroy(): void {
    // tslint:disable-next-line: deprecation
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}

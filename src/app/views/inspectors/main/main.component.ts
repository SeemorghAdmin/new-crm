import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export interface MenuItems {
  name: string;
  url: string;
}


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})



export class InspeectorComponent implements OnInit, OnDestroy {


 ////////////////// این خط ها متغیرهای مورد نیاز برای sidenav را ایجاد میکنند
 userType = "پنل کاربری سازمان های ناظر شبکه علمی ایران" // نام صفحه
 fillerNav: MenuItems[] = [
   {name: "1", url:"1"},
   {name: "2", url:"2"},
 ]; // ایجاد 50 تا آیتم برای نمایش در منو
 mobileQuery: MediaQueryList;
 private _mobileQueryListener: () => void;
  opened: boolean;
 ////////////////// انهتای بخش sidenav

  constructor(
    changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, /// متغیرهای مربوط به sidenav
    private router: Router,) {
    ////////////////// دستور های مربوط به داینامیک کردن sidenav
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    // tslint:disable-next-line: deprecation
    this.mobileQuery.addListener(this._mobileQueryListener);
    ////////////////// انتهای بخش sidenav
   }

  ngOnInit() {
    this.opened=true;
  }

  onLogout() {
    localStorage.removeItem('token');
    localStorage.removeItem('role')
    this.router.navigate(['']);
  }

  ngOnDestroy(): void {
    // tslint:disable-next-line: deprecation
    this.mobileQuery.removeListener(this._mobileQueryListener); // جهت پاکسازی sidenav
  }
}

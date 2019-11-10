import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export interface MenuItems {
  name: string;
  url: string;
}

@Component({
  selector: 'app-owner-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class OwnersMainComponent implements OnInit, OnDestroy {

  ////////////////// این خط ها متغیرهای مورد نیاز برای sidenav را ایجاد میکنند
  pageType = "پنل کاربری کارکنان خاشع" // نام صفحه
  fillerNav: MenuItems[] = [
    {name: "اضافه کردن کاربر جدید", url:"/owner/home/AddPerson"},
    {name: "درخواست های پشتیبانی", url:"/owner/home/ShowTickets"},
  ]; // ایجاد 50 تا آیتم برای نمایش در منو
   mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;
  ////////////////// انهتای بخش sidenav

  public opened: boolean;

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

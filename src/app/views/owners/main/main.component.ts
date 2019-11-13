import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { TicketingService } from 'src/app/services/Ticketing/Ticketing.service';

export interface MenuItems {
  name: string;
  url: string;
  badge: number;
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
    { name: "اضافه کردن کاربر جدید", url: "/owner/home/AddPerson", badge: 0 },
    { name: "درخواست های پشتیبانی", url: "/owner/home/ShowTickets", badge: 0 }
  ]; // ایجاد آیتم ها برای نمایش در منو
  unreadMsg;
  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;
  ////////////////// انهتای بخش sidenav
  public opened: boolean;
  constructor(
    changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, /// متغیرهای مربوط به sidenav
    private router: Router,private api: TicketingService) {
    ////////////////// دستور های مربوط به داینامیک کردن sidenav
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    // tslint:disable-next-line: deprecation
    this.mobileQuery.addListener(this._mobileQueryListener);
    ////////////////// انتهای بخش sidenav
  }
  ngOnInit() {
    this.api.getCountTicket();
    this.api.TicketCountSelected.subscribe(res =>{
    this.unreadMsg = res;
  this.updateBadgeNumbers();
    });
    this.opened = true;
  }

  updateBadgeNumbers(){
    this.fillerNav.forEach(element => {
      if(element.name == 'درخواست های پشتیبانی')
      {
        element.badge = this.unreadMsg;
      }
    });
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

import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { TicketingService } from 'src/app/services/Ticketing/Ticketing.service';
import { PersonService } from './../../../services/person/person.service';
import * as $ from 'jquery';

export interface MenuItems {
  name: string;
  url: string;
  badge: number;
}

export interface Person {
  personNational_ID: string;
  firstName: string;
  lastName: string;
  accessCodes: string;
}

@Component({
  selector: 'app-owner-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class OwnersMainComponent implements OnInit, OnDestroy {

  user: Person;
  panelOpenState = false;
  showWelcome=false;

  ////////////////// این خط ها متغیرهای مورد نیاز برای sidenav را ایجاد میکنند
  pageType = "پنل کاربری کارکنان خاشع" // نام صفحه
  fillerNav: MenuItems[] = [{ name: "ارتباط با برنامه نویسان", url: "/owner/home/app-ticket-for-developer", badge: 0 },
  { name: "درخواست های ارسالی به برنامه نویسان", url: "/owner/home/app-show-ticket-for-owners-manager", badge: 0 },
  { name: "مدیریت اطلاعات کارکنان خاشع", url: "/owner/home/app-staff-list", badge: 0 },
  ]; // ایجاد آیتم ها برای نمایش در منو
  unreadMsg = 2;
  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;
  ////////////////// انهتای بخش sidenav
  public opened: boolean;
  constructor(
    changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, /// متغیرهای مربوط به sidenav
    private router: Router, private api: TicketingService, public service: PersonService, ) {

    ////////////////// دستور های مربوط به داینامیک کردن sidenav
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    // tslint:disable-next-line: deprecation
    this.mobileQuery.addListener(this._mobileQueryListener);
    ////////////////// انتهای بخش sidenav
  }
  public ngOnInit() {
    if (this.router.url === '/owner/home') {
      this.showWelcome=true;
    }
    this.api.getCountTicket();
    this.api.TicketCountSelected.subscribe(res => {
      this.unreadMsg = res;
      this.updateBadgeNumbers();
    });
    this.service.GetUserProfile().subscribe(
      res => {
        this.user = res as Person;
        this.CheckRoel(this.user);
      }
    );
    this.opened = true;



  }

  updateBadgeNumbers() {
    this.fillerNav.forEach(element => {
      if (element.name == 'درخواست های پشتیبانی') {
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


  addUser: boolean;
  ticketingRequest: boolean;
  accessModi: boolean;
  CheckRoel(person: Person) {

    for (let index = 1; index < person.accessCodes.lastIndexOf('&'); index = index + 3) {
      const element = person.accessCodes[index] + person.accessCodes[index + 1];
      switch (element) {
        case 'aa':
          this.fillerNav.push({ name: "اضافه کردن کاربر جدید", url: "/owner/home/AddPerson", badge: 0 });
          break;
        case 'ab':
          this.fillerNav.push({ name: "درخواست های پشتیبانی", url: "/owner/home/ShowTickets", badge: this.unreadMsg });
          break;
        case 'ac':
          this.fillerNav.push({ name: "ویرایش دسترسی کارکنان خاشع", url: "/owner/home/access-code", badge: 0 });
          break;
        default:
          break;
      }
    }

  }
}

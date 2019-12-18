import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { PersonService } from './../../../services/person/person.service';
import { ToastrService } from 'ngx-toastr';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'changepassword',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})

export class ChangePasswordComponent implements OnInit {

  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;
  userId: string = '';
  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher,
    private route: ActivatedRoute, private router: Router, public service: PersonService, private toster: ToastrService) {
    ////////////////// دستور های مربوط به داینامیک کردن sidenav
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    // tslint:disable-next-line: deprecation
    this.mobileQuery.addListener(this._mobileQueryListener);
    ////////////////// انتهای بخش sidenav
  }

  onSubmit() {
    this.service.formModelPasswors.value.UserId = this.userId;
    this.service.ChangePassword().subscribe(
      (res: any) => {
        if (res == true) {
          this.service.formModel.reset();
          this.toster.success('رمز عبور با موفقیت تغییر یافت.')
          localStorage.removeItem('token');
          localStorage.removeItem('role')
          this.router.navigate(['']);
        }
      }, (err: any) => {
        if (err.status == 400)
          this.toster.error(err.error);

      }
    );
  }

  ngOnInit() {
    this.userId = this.route.snapshot.paramMap.get('id');
  }
}

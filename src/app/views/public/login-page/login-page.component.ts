import { Component, OnInit } from '@angular/core';
import { AuthService} from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { PersonService } from '../../../services/person/person.service';

import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { TicketForDeveloperService } from 'src/app/services/Ticketing/ticket-for-developer.service';

import { faUnlockAlt,faUserCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  panelOpenState = true;
  clicked = false;

  faUnlockAlt = faUnlockAlt;
  faUserCircle = faUserCircle;

  constructor(private fb: FormBuilder, private router: Router, private toastr: ToastrService, public service: PersonService, private api :TicketForDeveloperService) { }


  ngOnInit() {
    this.service.loginModel.reset();
    //localStorage.removeItem('token');
    if (localStorage.getItem('token') != null)
     {
      switch ( parseInt(localStorage.getItem('role')))
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
     }
  }
  onSubmit() {
    this.clicked=true;
    // لاگین رضا
    this.service.Login().subscribe(
    (res: any)  =>
    {

      if (res.statusCode == 200)
      {
        this.service.loginModel.reset();
        this.service.userId = res.user.personNational_ID;

        //this.toastr.success('Ok');
        //console.log(res.user.token)
        localStorage.setItem('token', res.user.token);
        localStorage.setItem('role', res.user.role1 );
        localStorage.setItem('role2',res.user.role2);
        if (res.user.needChangePassword == true)
        {
          this.router.navigateByUrl('/change-password/' + res.user.personNational_ID);
        } else
        {
          switch (res.user.role1)
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
        }


      }
    }, (err : any) =>
    {
        if (err.status == 400)
        this.toastr.error(err.error);
        this.clicked=false;
    });
  }

}

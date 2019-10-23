import { Component, OnInit } from '@angular/core';
import { AuthService} from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { PersonService } from './../../../services/serviceperson/person.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  panelOpenState = false;
  formModel = {
    UserName :'', 
    Password : ''
  }
  constructor( private router: Router, private toastr: ToastrService, private service: PersonService) { }

  ngOnInit() {
    
    //if (localStorage.getItem('token') != null)
     // this.router.navigateByUrl('/cust/home');
  }
  onSubmit(form: NgForm) {
    // لاگین رضا
    this.service.Login().subscribe(
    (res: any)  => 
    {
      console.log(res);
      if (res.statusCode == 200) 
      {
        this.toastr.success('Ok');
        //console.log(res.user.token)
        localStorage.setItem('token', res.user.token);

        switch (res.user.role1) {
          case 1:
            this.router.navigateByUrl('/cust/home');
            break;
        
          default:
            break;
        }
      } 
    }, (err : any) =>
    {
        if (err.status == 400)
        this.toastr.error(err.error);
    });
  }

}

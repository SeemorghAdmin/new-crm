import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { PersonService } from './../../../services/person/person.service';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'changepassword',
    templateUrl: './change-password.component.html',
    styleUrls: ['./change-password.component.css']
})

export class ChangePasswordComponent implements OnInit {
    userId: string = '';
    constructor( private route: ActivatedRoute, private router: Router, private service: PersonService, private toster: ToastrService) {   }

    onSubmit()
    {
        this.service.formModelPasswors.value.UserId = this.userId;
        this.service.ChangePassword().subscribe(
            (res : any) =>
            {
                if (res == true) {
                    this.service.formModel.reset();
                    this.toster.success('رمز عبور با موفقیت تغییر یافت.')
                    localStorage.removeItem('token');
                    localStorage.removeItem('role')
                    this.router.navigate(['']);
                }
            }, (err : any) =>
            {
                if (err.status == 400)
                this.toster.error(err.error);
               
            }
        );
    }

    ngOnInit() { 
        this.userId = this.route.snapshot.paramMap.get('id');
    }
}
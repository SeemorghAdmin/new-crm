import { Component, OnInit } from '@angular/core';
import { PersonService } from '../../../services/person/person.service';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-add-person',
    templateUrl: './add-person.component.html',
    styleUrls: ['./add-person.component.css']
})
export class AddPersonComponent implements OnInit {

    constructor(public service: PersonService, private toster: ToastrService) { }

    isDeveloper: boolean = false;
    
    AddPerson() 
    {
        this.service.PostPerson().subscribe(
            res => 
            {
                this.service.formModel.value.IsAdmin = false;
                // tslint:disable: triple-equals
                if (res == true) 
                {
                   this.toster.success('ثبت نام با موفقیت انجام شد');
                }
            },
            (err: any) => 
            {
                if (err.status == 400) 
                {
                    this.toster.error(err.error);
                }
            });
    }

    ngOnInit(): void 
    {
        if (parseInt(localStorage.getItem('role')) == 1) 
        {
            this.isDeveloper = true;
        }
     }
}

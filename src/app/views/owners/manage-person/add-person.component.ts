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
        if (this.isDeveloper == true) {
            this.service.formModel.value.PositionId = 1;
            
        }
        this.service.PostPerson().subscribe(
            res => 
            {
                
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

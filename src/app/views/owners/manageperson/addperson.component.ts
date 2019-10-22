import { Component, OnInit } from '@angular/core';
import { PersonService } from './../../../services/serviceperson/person.service';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'addperson',
    templateUrl: './addperson.component.html',
    styleUrls: ['./addperson.component.css']
})
export class AddPersonComponent implements OnInit {
    constructor(private service: PersonService, private toster: ToastrService) { }

    AddPerson()
    {
        this.service.PostPerson().subscribe(
            res =>
            {
                if (res == true) {
                   this.toster.success('ثبت نام با موفقیت انجام شد');
                }
            }, 
            (err : any) =>
            {
                if (err.status == 400)
                this.toster.error(err.error);
            });
    }

    ngOnInit(): void { }
}

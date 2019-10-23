import { Component, OnInit } from '@angular/core';
import { PersonService } from '../../../services/serviceperson/person.service';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-add-person',
    templateUrl: './add-person.component.html',
    styleUrls: ['./add-person.component.css']
})
export class AddPersonComponent implements OnInit {
    constructor(private service: PersonService, private toster: ToastrService) { }

    AddPerson() {
        this.service.PostPerson().subscribe(
            res => {
                // tslint:disable: triple-equals
                if (res == true) {
                   this.toster.success('ثبت نام با موفقیت انجام شد');
                }
            },
            (err: any) => {
                if (err.status == 400) {
                this.toster.error(err.error);
                }
            });
    }

    ngOnInit(): void { }
}

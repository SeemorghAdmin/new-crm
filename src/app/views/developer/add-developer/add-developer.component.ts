import { Component, OnInit } from '@angular/core';
import { PersonService } from '../../../services/person/person.service';
import { ToastrService } from 'ngx-toastr';
import { AddDeveloperService } from 'src/app/services/developer/add-developer.service';

@Component({
  selector: 'app-add-developer',
  templateUrl: './add-developer.component.html',
  styleUrls: ['./add-developer.component.css']
})
export class AddDeveloperComponent implements OnInit {

  constructor(private service: AddDeveloperService, private toster: ToastrService) { }

  AddPerson() {
      this.service.PostAddDeveloper().subscribe(
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

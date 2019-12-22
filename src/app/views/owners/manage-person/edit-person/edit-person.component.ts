import { Component, OnInit } from '@angular/core';
import { PersonService } from './../../../../services/person/person.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

export interface StaffClass {
  address : string,
  birthDate : string,
  eduDegree : string,
  eduField : string,
  positionId : string,
  staffNumber : string,
  teleNumber : string,
  firstName : string,
  lastName : string,
  fatherName : string,
  shenasNum : string,
  shenasSerial : string,
}

@Component({
  selector: 'app-edit-person',
  templateUrl: './edit-person.component.html',
  styleUrls: ['./edit-person.component.css']
})
export class EditPersonComponent implements OnInit {
  id;
  staff = {};
  constructor(private service: PersonService, private route: ActivatedRoute, private router: Router ) { }
  public Staff: StaffClass = { address : '', birthDate : '', eduDegree : '', eduField : '',positionId : '', staffNumber : '',teleNumber : '', firstName : '',lastName : '', fatherName : '', shenasSerial : '', shenasNum : '',};

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);
    this.service.getStaffEdit(this.id).subscribe(
      res => {
        this.staff = res;
        console.log(res)
      }
    );
  }
  edit(Staff)
  {
    console.log(this.staff);
    this.service.StaffEdit(this.staff, this.id).subscribe(
      res => {
        if (res == true) {
          this.router.navigateByUrl('/owner/home/app-staff-list');
        }
      }
    );
  }
}



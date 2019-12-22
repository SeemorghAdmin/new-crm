import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PersonService } from './../../../services/person/person.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-staff',
  templateUrl: './edit-staff.component.html',
  styleUrls: ['./edit-staff.component.css']
})
export class EditStaffComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private service : PersonService, private toster: ToastrService) { }

  ngOnInit() {
    
  }

  delete()
  {
    console.log(this.data.personNational_ID);
    this.service.DeleteStaff(this.data.personNational_ID).subscribe(
      res =>
      {
        if (res == true) {
          this.toster.success('کاربر ' + this.data.person.firstName + ' حذف شد')
        } else {
          this.toster.error('خطایی در سمت سرور وجود دارد!')
        }
        
      }
    )
  }
}
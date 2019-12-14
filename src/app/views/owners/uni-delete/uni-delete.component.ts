import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { EcCustomersService } from 'src/app/services/owners/ec-customers.service';
import { DeleteUniService } from './../../../services/owners/delete-uni.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-uni-delete',
  templateUrl: './uni-delete.component.html',
  styleUrls: ['./uni-delete.component.css']
})
export class UniDeleteComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private service: DeleteUniService, public toster: ToastrService) { }

  ngOnInit() {
    
  }

  delete(uniId)
  {
      this.service.DeleteUni(this.data.uniNationalId).subscribe(
        res => 
        {
          if (res == true) {
            this.toster.success('مشترک با نام  ' + this.data.uniName + ' حذف شد ')
          }
        }
      );
  }
}

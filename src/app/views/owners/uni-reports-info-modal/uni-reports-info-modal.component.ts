import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { EcCustomersService } from 'src/app/services/owners/ec-customers.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-uni-reports-info-modal',
  templateUrl: './uni-reports-info-modal.component.html',
  styleUrls: ['./uni-reports-info-modal.component.css']
})
export class UniReportsInfoModalComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private http: HttpClient, public service: EcCustomersService, private toster: ToastrService) { }
  d :any;
  edit1:boolean = false;
  edit2:boolean = false;
  edit3:boolean = false;
  edit4:boolean = false;
  ngOnInit() {
    this.service.GetInfo(this.data.uniNationalId).subscribe(res=>{
      this.d = res;
    });
  }

  editMosh()
  {
    this.edit1 = true;
  }

  editMod()
  {
    this.edit2 = true;
  }

  editAdr()
  {
    this.edit3 = true;
  }

  editNam()
  {
    this.edit4 = true;
  }

  onSubmit(d)
  {
    this.service.UniPut(d).subscribe(res =>
      {
        if (res == true) {
          this.toster.success(d.uniName + ' با موفقیت ویرایش شد')
        } else {
          this.toster.success(d.uniName + ' ویرایش با مشکل مواجه شد')
        }
      }
      );
  }

}

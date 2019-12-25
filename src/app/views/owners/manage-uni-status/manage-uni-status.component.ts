import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EcCustomersService } from 'src/app/services/owners/ec-customers.service';
import { UniStatusService } from 'src/app/services/owners/uni-status.service';
import { DpDatePickerModule } from 'ng2-jalali-date-picker';
import * as moment from 'jalali-moment';
import { ConstantsService } from 'src/app/services/constants/constants.service';
import { ToastrService } from 'ngx-toastr';
export interface UniLog {
  uniNationalId: number;
  uniStatus: number;
  uniSubStatus: number;
  msg: string;
}
@Component({
  selector: 'app-manage-uni-status',
  templateUrl: './manage-uni-status.component.html',
  styleUrls: ['./manage-uni-status.component.css']
})
export class ManageUniStatusComponent implements OnInit {
  public mySentences: any = [
    { id: 0, text: 'مشکل در فایل درخواست عضویت' },
    { id: 1, text: 'مشکل در نام بالاترین مقام' },
    { id: 2, text: 'مشکل در شماره تلفن' },
    { id: 3, text: 'مشکل در شماره فکس' },
    { id: 4, text: 'شهر اشتباه' },
    { id: 5, text: 'استان اشتباه' },
    { id: 6, text: 'آدرس اشتباه' },
    { id: 7, text: 'کد پستی اشتباه' },
    { id: 8, text: 'مشکل در پست الکترونیک' },
    { id: 9, text: 'مکان اشتباه روی نقشه' },
  ];
  public mySentences1: any = [
    { id: 1000, text: 'شخص امضاء کننده مجاز به امضاء نبوده' },
    { id: 1001, text: 'فرمت قرارداد ارسالی مطابقت ندارد' },
  ];
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public http: HttpClient, private api: EcCustomersService, private apii: UniStatusService ,
  private constants: ConstantsService ,private toastr: ToastrService) { }

  readonly BaseURI = this.constants.baseApiUrlNc;
  public Unilog: UniLog = { uniNationalId: 0, uniStatus: 0, uniSubStatus: 0, msg: '' };
  firstDropDown;
  t = 1;
  ta;
  substatus;
  status;
  tb;
  tc;
  td;
  r;
  selectedDate = "";

  datePickerConfig = {
    drops: 'up',
    format: 'YYYY/MM/DD',
  }
  public progress: number;
  public message: string;
  public progress1: number;
  public message1: string;
  public progress2: number;
  public message2: string;
  public progress3: number;
  public message3: string;
  public response: FormData;
  public response1: FormData;
  public response2: FormData;
  public response3: FormData;
  public uploadFinished = (event) => {
    this.response = event;
    this.response.append('id', this.data.uniNationalId);
  };
  ngOnInit() {
    this.api.GetManageStatus(this.data.uniNationalId).subscribe(res => {
      this.firstDropDown = res;
    });
  }

  public uploadFile1 = (files) => {
    if (files.length === 0) {
      return;
    }
    let fileToUpload = <File>files[0];
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);
    formData.append('type', 'subscription-form-signed');
    this.response1 = formData;
    this.tb = fileToUpload.name;
  }
  public uploadFile2 = (files) => {
    if (files.length === 0) {
      return;
    }
    let fileToUpload = <File>files[0];
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);
    formData.append('type', 'subscription-letter');
    this.response2 = formData;
    this.tc = fileToUpload.name;
  }
  public uploadFile3 = (files) => {
    if (files.length === 0) {
      return;
    }
    let fileToUpload = <File>files[0];
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);
    formData.append('type', 'subscription-post-ticket');
    this.response3 = formData;
    this.td = fileToUpload.name;
  }
  logg(id) {
    this.substatus = id;
  }
  log(id) {
    this.status = id;
    if (id == 2) {
      this.ta = 1;
    }
    else if (id == 1002) {
      this.ta = 2;
    }
    else {
      this.ta = 3;
    }
    this.firstDropDown.forEach(element => {
      if (element.value == id) {
        if (element.faStr == 'ارسال قرارداد اشتراک جهت امضاء متقاضی') {
          this.t = 2;
        }
        else if (element.faStr == 'ثبت نام مسئول اصلی') {
          this.t = 4;
        }
        else {
          this.t = 1;
        }
      }
    });
  }



  upload(Unilog) {
    if (this.ta == 3) {
      Unilog.uniSubStatus = 0;
      Unilog.uniStatus = parseInt(this.status);
      Unilog.uniNationalId = this.data.uniNationalId;
    }
    else {
      Unilog.uniStatus = parseInt(this.status);
      Unilog.uniNationalId = this.data.uniNationalId;
      Unilog.uniSubStatus = parseInt(this.substatus);
    }
    this.apii.postStatus(Unilog).subscribe(res => {
      if(res == true)
      {
        
        this.toastr.success('تغییر وضعیت با موفقیت انجام شد');
        Unilog.msg = '';
      }
      else
      {
        this.toastr.error('انجام نشد لطفا دوباره امتحان کنید');
      }
    });
  }
  uploadd(Unilog) {
    Unilog.uniSubStatus = 0;
    Unilog.uniStatus = parseInt(this.status);
    Unilog.uniNationalId = this.data.uniNationalId;
    this.apii.postStatus(Unilog).subscribe(res => {
      if(res == true)
      {
        
        this.toastr.success('تغییر وضعیت با موفقیت انجام شد');
        Unilog.msg = '';
      }
    });
    this.http.post( this.BaseURI + '/UniStatusLog/Upload', this.response, { reportProgress: true, observe: 'events' })
      .subscribe(event2 => {
        if (event2.type === HttpEventType.UploadProgress)
          this.progress = Math.round(100 * event2.loaded / event2.total);
        else if (event2.type === HttpEventType.Response) {
          this.message = 'آپلود انجام شد';
        }
      });
  }
  uploaddd(dateObject) {
    dateObject = moment.from(dateObject, 'fa', 'YYYY/MM/DD').format('YYYY/MM/DD');
    this.response1.append('number',this.r);
    this.response1.append('date',dateObject);
    this.response1.append('id', this.data.uniNationalId);
    this.http.post( this.BaseURI + '/ManageUniStatus', this.response1, { reportProgress: true, observe: 'events' })
    .subscribe(event2 => {
      if (event2.type === HttpEventType.UploadProgress)
        this.progress1 = Math.round(100 * event2.loaded / event2.total);
      else if (event2.type === HttpEventType.Response) {
        this.message1 = 'آپلود انجام شد';
        this.response2.append('id', this.data.uniNationalId);
        this.http.post(this.BaseURI + '/ManageUniStatus1', this.response2, { reportProgress: true, observe: 'events' })
        .subscribe(event2 => {
          if (event2.type === HttpEventType.UploadProgress)
            this.progress2 = Math.round(100 * event2.loaded / event2.total);
          else if (event2.type === HttpEventType.Response) {
            this.message2 = 'آپلود انجام شد';
            this.response3.append('id', this.data.uniNationalId);
            this.http.post(this.BaseURI + '/ManageUniStatus2', this.response3, { reportProgress: true, observe: 'events' })
            .subscribe(event2 => {
              if (event2.type === HttpEventType.UploadProgress)
                this.progress3 = Math.round(100 * event2.loaded / event2.total);
              else if (event2.type === HttpEventType.Response) {
                this.message3 = 'آپلود انجام شد';
              }
            });
          }
        });
      }
    });
  }
}

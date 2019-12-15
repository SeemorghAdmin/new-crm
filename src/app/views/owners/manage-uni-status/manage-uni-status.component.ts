import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EcCustomersService } from 'src/app/services/owners/ec-customers.service';
import { UniStatusService } from 'src/app/services/owners/uni-status.service';

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
  public mySentences:Array<Object> = [
    {id: 0, text: 'مشکل در فایل درخواست عضویت'},
    {id: 1, text: 'مشکل در نام بالاترین مقام'},
    {id: 2, text: 'مشکل در شماره تلفن'},
    {id: 3, text: 'مشکل در شماره فکس'},
    {id: 4, text: 'شهر اشتباه'},
    {id: 5, text: 'استان اشتباه'},
    {id: 6, text: 'آدرس اشتباه'},
    {id: 7, text: 'کد پستی اشتباه'},
    {id: 8, text: 'مشکل در پست الکترونیک'},
    {id: 9, text: 'مکان اشتباه روی نقشه'},
];
public mySentences1:Array<Object> = [
    {id: 1000, text: 'شخص امضاء کننده مجاز به امضاء نبوده'},
    {id: 1001, text: 'فرمت قرارداد ارسالی مطابقت ندارد'},
];
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public http: HttpClient, private api: EcCustomersService,private apii: UniStatusService) { }
  public Unilog: UniLog = { uniNationalId: 0, uniStatus: 0, uniSubStatus: 0, msg: '' };
  firstDropDown;
  t=1;
  ta;
  substatus;
  status;
  public progress: number;
  public message: string;
  public response: FormData; 
public uploadFinished = (event) => {
  this.response = event;
  this.response.append('id',this.data.uniNationalId);
};
  ngOnInit() {
    this.api.GetManageStatus(this.data.uniNationalId).subscribe(res => {
      this.firstDropDown = res;
    });
  }
  logg(id) 
  {
    this.substatus =id;
  }  
  log(id) {
    this.status=id;
    if(id == 2)
    {
        this.ta=1;
    }
   else if(id == 1002)
    {
      this.ta=2;
    }
    else
    {
      this.ta=3;
    }
    this.firstDropDown.forEach(element => {
      if (element.value == id) {
      if(element.faStr == 'ارسال قرارداد اشتراک جهت امضاء متقاضی')
      {
        this.t=2;
      }
    else {this.t=1}
      }
    });
  }
  upload(Unilog)
  {
    if(this.ta == 3)
    {
      Unilog.uniSubStatus= 0;
      Unilog.uniStatus=parseInt(this.status);
      Unilog.uniNationalId=this.data.uniNationalId ;
    }
   else
   {
    Unilog.uniStatus=parseInt(this.status);
    Unilog.uniNationalId=this.data.uniNationalId ;
    Unilog.uniSubStatus= parseInt(this.substatus);
   }
   
this.apii.postStatus(Unilog).subscribe(res => {
});
  }
  uploadd()
  {
     this.http.post('http://localhost:58989/api/UniStatusLog/Upload', this.response, {reportProgress: true, observe: 'events'})
    .subscribe(event2 => {
      if (event2.type === HttpEventType.UploadProgress)
          this.progress = Math.round(100 * event2.loaded / event2.total);
          else if (event2.type === HttpEventType.Response) {
            this.message = 'آپلود انجام شد';  
          }
    });  
  }
}  
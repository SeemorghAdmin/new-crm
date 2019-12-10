import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { ConstantsService } from '../constants/constants.service';


@Injectable({
  providedIn: 'root'
})
export class AddUniPreDataService {

  constructor(private fb: FormBuilder, private http: HttpClient, private constants: ConstantsService) { }
  readonly BaseURI = this.constants.baseApiUrlNc;
  readonly BaseURL = this.constants.baseApiUrlEc;


   // ایجاد فرم مدل افزودن دانشگاه ها
   formModel = this.fb.group(
    {
      uniType:['', Validators.required],
      unicode: ['', Validators.required],
      uniname: ['', Validators.required],
      address: ['', Validators.required],
    
    });


    loginModel = this.fb.group(
      {
        UserName: [''],
        Password: ['']
      });



      // ساخت متد پست دانشگاه
      PostpostUniData()
      {
          var body =
          {
            uniType:this.formModel.value.unicode,
            unicode : this.formModel.value.unicode,
            uniname : this.formModel.value.uniname,
            address: this.formModel.value.address,
            
          };

          return this.http.post(this.BaseURL + '/post-pre-university.jsp', body);
      }

      // متد ورود به حساب کاربری
      Login()
      {
        var body =
        {
          UserName: this.loginModel.value.UserName,
          Password: this.loginModel.value.Password
        };
        return this.http.post(this.BaseURL + '/add-uni-pre-data' , body);
      }

      //مشخصات حساب کاربری
      GetUserProfile()
      {
        return this.http.get(this.BaseURL + '/add-uni-pre-data');
      }
}
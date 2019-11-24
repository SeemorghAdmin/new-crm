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


   // ایجاد فرم مدل افزودن دانشگاه ها
   formModel = this.fb.group(
    {
      unicode : ['', Validators.required],
      uniname: ['', Validators.required],
      address: ['', Validators.required],
    
    });


    loginModel = this.fb.group(
      {
        UserName: [''],
        Password: ['']
      });



      // ساخت متد پست دولوپر
      PostAddDeveloper()
      {
          var body =
          {
            unicode : this.formModel.value.unicode,
            uniname : this.formModel.value.uniname,
            address: this.formModel.value.address,
            
          };

          return this.http.post(this.BaseURI + '/Owners', body);
      }

      // متد ورود به حساب کاربری
      Login()
      {
        var body =
        {
          UserName: this.loginModel.value.UserName,
          Password: this.loginModel.value.Password
        };
        return this.http.post(this.BaseURI + '/add-uni-pre-data' , body);
      }

      //مشخصات حساب کاربری
      GetUserProfile()
      {
        return this.http.get(this.BaseURI + '/add-uni-pre-data');
      }
}






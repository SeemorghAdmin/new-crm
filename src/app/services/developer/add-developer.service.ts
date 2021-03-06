import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { ConstantsService } from '../constants/constants.service';

@Injectable({
  providedIn: 'root'
})
export class AddDeveloperService
{
  constructor(private fb: FormBuilder, private http: HttpClient, private constants: ConstantsService) { }
  readonly BaseURI = this.constants.baseApiUrlNc;
  
  // ایجاد فرم مدل استف
  formModel = this.fb.group(
      {
        PersonNationalId : ['', Validators.required],
        FirstName: ['', Validators.required],
        LastName: ['', Validators.required],
        FatherName: ['', Validators.required],
        BirthDate: ['', Validators.required],
        Gender: [''],
        UserName: [''],
        Password:[''],
        Email: [''],
        NationalCardSerial: [''],
        ShenasNum: [''],
        ShenasSerial:[''],
        MobileNumber:[''],
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
            PersonNationalId : this.formModel.value.PersonNationalId,
            FirstName : this.formModel.value.FirstName,
            LastName: this.formModel.value.LastName,
            FatherName : this.formModel.value.FatherName,
            BirthDate : this.formModel.value.BirthDate,
            PositionId:  this.formModel.value.PositionId,
            Gender : this.formModel.value.Gender,
            UserName: this.formModel.value.UserName,
            Password: this.formModel.value.Password,
            Email : this.formModel.value.Email,
            NationalCardSerial : this.formModel.value.NationalCardSerial,
            ShenasNum: this.formModel.value.ShenasNum,
            ShenasSerial : this.formModel.value.ShenasSerial,
            MobileNumber:this.formModel.value.MobileNumber,
          };

          return this.http.post(this.BaseURI + '/Developer', body);
      }

      // متد ورود به حساب کاربری
      Login()
      {
        var body =
        {
          UserName: this.loginModel.value.UserName,
          Password: this.loginModel.value.Password
        };
        return this.http.post(this.BaseURI + '/AddDeveloper' , body);
      }

      //مشخصات حساب کاربری
      GetUserProfile()
      {
        return this.http.get(this.BaseURI + '/AddDeveloper');
      }
}

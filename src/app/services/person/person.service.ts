import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersonService
{
  constructor(private fb: FormBuilder, private http: HttpClient) { }
  readonly BaseURI = 'http://185.79.99.245/new-crm-api/api';

  // ایجاد فرم مدل استف
  formModel = this.fb.group(
      {
        PersonNationalId : ['',[Number, Validators.required, Validators.maxLength(10), Validators.minLength(10)]],
        FirstName: ['', Validators.required],
        LastName: ['', Validators.required],
        FatherName: ['', Validators.required],
        BirthDate: ['', Validators.required],
        Gender: [''],
        StaffNumber: [''],
        PositionId:[''],
        TeleNumber: [''],
        Address: [''],
        UserName: [''],

        Email: ['', Validators.email],
        EduDegree: [''],
        EduField: [''],
        NationalCardSerial: [''],
        ShenasNum: [''],
        ShenasSerial: [''],
        IsAdmin: ['']
      });

      loginModel = this.fb.group(
        {
          UserName: [''],
          Password: ['']
        });

      // ساخت متد پست استف
      PostPerson()
      {
        if (localStorage.getItem('role') == '1') {
          var body =
          {
            PersonNationalId : this.formModel.value.PersonNationalId,
            FirstName : this.formModel.value.FirstName,
            StaffNumber : this.formModel.value.StaffNumber,
            LastName: this.formModel.value.LastName,
            FatherName : this.formModel.value.FatherName,
            BirthDate : this.formModel.value.BirthDate,
            PositionId:  this.formModel.value.PositionId,
            TeleNumber: this.formModel.value.TeleNumber,
            Address : this.formModel.value.Address,
            Gender : this.formModel.value.Gender,
            UserName: this.formModel.value.UserName,
            Email : this.formModel.value.Email,
            EduDegree : this.formModel.value.EduDegree,
            EduField : this.formModel.value.EduField,
            NationalCardSerial : this.formModel.value.NationalCardSerial,
            ShenasNum: this.formModel.value.ShenasNum,
            ShenasSerial : this.formModel.value.ShenasSerial,
            IsAdmin: true
          };
        } else {
          var body =
          {
            PersonNationalId : this.formModel.value.PersonNationalId,
            FirstName : this.formModel.value.FirstName,
            StaffNumber : this.formModel.value.StaffNumber,
            LastName: this.formModel.value.LastName,
            FatherName : this.formModel.value.FatherName,
            BirthDate : this.formModel.value.BirthDate,
            PositionId:  this.formModel.value.PositionId,
            TeleNumber: this.formModel.value.TeleNumber,
            Address : this.formModel.value.Address,
            Gender : this.formModel.value.Gender,
            UserName: this.formModel.value.UserName,
            Email : this.formModel.value.Email,
            EduDegree : this.formModel.value.EduDegree,
            EduField : this.formModel.value.EduField,
            NationalCardSerial : this.formModel.value.NationalCardSerial,
            ShenasNum: this.formModel.value.ShenasNum,
            ShenasSerial : this.formModel.value.ShenasSerial,
            IsAdmin: false
          };
        }

          return this.http.post(this.BaseURI + '/Staff', body);
      }

      // متد ورود به حساب کاربری
      Login()
      {
        var body =
        {
          UserName: this.loginModel.value.UserName,
          Password: this.loginModel.value.Password
        };
        return this.http.post(this.BaseURI + '/Person' , body);
      }

      //مشخصات حساب کاربری
      GetUserProfile()
      {
        return this.http.get(this.BaseURI + '/Person');
      }
}

import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ConstantsService } from '../constants/constants.service';

@Injectable({
  providedIn: 'root'
})
export class AccessCodeService
{
  constructor(private fb: FormBuilder, private http: HttpClient, private constants: ConstantsService) { }
  readonly BaseURI = this.constants.baseApiUrlNc;

  formModel = this.fb.group({
    AccessCodes: [''],
    UserId: ['']
  });

  SetAccessCode()
  {
      var body = {
        AccessCodes: this.formModel.value.AccessCodes,
        UserId: this.formModel.value.UserId
      }

      return this.http.post(this.BaseURI + '/accesscode' , body)
  }

  GetPersonAll()
  {
      return this.http.get(this.BaseURI + '/Person/getPersonAll')
  }

  GetAccessModifer()
  {
    return this.http.get(this.BaseURI + '/AccessCode/getaccessmodifier');
  }

}

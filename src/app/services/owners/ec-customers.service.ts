import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { ConstantsService } from '../constants/constants.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class EcCustomersService {

  constructor(private http:HttpClient, private constants:ConstantsService, private fb: FormBuilder) { }

  readonly BaseURI = this.constants.baseApiUrlNc;
  readonly BaseUrlEc = this.constants.baseApiUrlEc;



  GetList(subcode, isOstani)
  {
    if (isOstani == true) {
      return this.http.get(this.BaseUrlEc + '/get-uni-list.jsp?id=' + subcode);
    } else {
      return this.http.get(this.BaseUrlEc + '/get-uni-list.jsp?sub-code=' + subcode);
    }
  }

  GetInfo(id)
  {
    return this.http.get(this.BaseUrlEc + '/get-uni-info.jsp?id=' + id);
  }
  formModel = this.fb.group
  ({
    uniNationalId: [''],
    uniName: [''],
    uniEcoCode: [''],
    uniTopManagerName: [''],
    uniTopManagerPos: [''],
    uniSignatoryPos: [''],
    uniSignatoryNationalId: [''],
    State: [''],
    City: [''],
    uniAddress: [''],
    uniPostalCode: [''],
    uniTelNo: [''],
    agentFaxNo: [''],
    uniWebsite: [''],
    uniEmail: [''],
    agentFname: [''],
    agentLname: [''],
    agentNationalId: [''],
    agentPos: [''],
    agentTeleNo: [''],
    agentMobileNo: [''],
  });
  UniPut(body:any)
  {
    return this.http.put(this.BaseURI + '/Univercity', body);
  }

  GetManageStatus(id)
  {
    return this.http.get(this.BaseUrlEc + '/manage-uni-status.jsp?id=' + id);
  }
}

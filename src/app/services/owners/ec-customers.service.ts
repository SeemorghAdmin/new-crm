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
  UniPut()
  {
    var body =
    {
      uniNationalId : this.formModel.value.uniNationalId,
      uniName : this.formModel.value.uniName,
      uniEcoCode : this.formModel.value.uniEcoCode,
      uniTopManagerName : this.formModel.value.uniTopManagerName,
      uniTopManagerPos : this.formModel.value.uniTopManagerPos,
      uniSignatoryPos : this.formModel.value.uniSignatoryPos,
      uniSignatoryNationalId : this.formModel.value.uniSignatoryNationalId,
      State : this.formModel.value.State,
      City : this.formModel.value.City,
      uniAddress : this.formModel.value.uniAddress,
      uniPostalCode : this.formModel.value.uniPostalCode,
      uniTelNo : this.formModel.value.uniTelNo,
      agentFaxNo : this.formModel.value.agentFaxNo,
      uniWebsite : this.formModel.value.uniWebsite,
      uniEmail : this.formModel.value.uniEmail,
      agentFname : this.formModel.value.agentFname,
      agentLname : this.formModel.value.agentLname,
      agentNationalId : this.formModel.value.agentNationalId,
      agentPos : this.formModel.value.agentPos,
      agentTeleNo : this.formModel.value.agentTeleNo,
      agentMobileNo : this.formModel.value.agentMobileNo,
    }
    console.log(body);
    return this.http.post(this.BaseUrlEc + '/post-uni-info.jsp', body);
  }
  
  GetManageStatus(id)
  {
    return this.http.get(this.BaseUrlEc + '/manage-uni-status.jsp?id=' + id);
  }
}

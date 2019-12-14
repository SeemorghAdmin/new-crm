import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { ConstantsService } from '../constants/constants.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class UniService {

  constructor(private http:HttpClient, private constants:ConstantsService, private fb: FormBuilder) { }

  readonly BaseURI = this.constants.baseApiUrlNc;
  readonly BaseUrlEc = this.constants.baseApiUrlEc;
 
  GetList()
  {
      return this.http.get(this.BaseURI + '/Univercity');
  }

  Delete(id)
  {
    return this.http.delete(this.BaseURI + '/Univercity?id=' + id)
  }
}

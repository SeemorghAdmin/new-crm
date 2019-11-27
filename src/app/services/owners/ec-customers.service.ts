import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { ConstantsService } from '../constants/constants.service';

@Injectable({
  providedIn: 'root'
})
export class EcCustomersService {

  constructor(private http:HttpClient, private constants:ConstantsService) { }

  readonly BaseURI = this.constants.baseApiUrlNc;
  readonly BaseUrlEc = this.constants.baseApiUrlEc;


  GetList(subcode)
  {
    return this.http.get(this.BaseUrlEc + '/get-uni-list.jsp?sub-code=' + subcode);
  }

  GetInfo(id)
  {
    return this.http.get(this.BaseUrlEc + '/get-uni-info.jsp?id=' + id);
  }
}

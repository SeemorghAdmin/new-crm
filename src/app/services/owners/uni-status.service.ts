import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConstantsService } from '../constants/constants.service';

@Injectable({
  providedIn: 'root'
})
export class UniStatusService {

  constructor( private http: HttpClient, private constants: ConstantsService) { }
  readonly BaseURI = this.constants.baseApiUrlNc;
  postStatus(Unilog)
{
  return this.http.post(this.BaseURI + '/UniStatusLog/', Unilog);
}
}

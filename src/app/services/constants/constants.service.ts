import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstantsService {

  readonly baseApiUrlNc = "http://localhost:58989/api";
  readonly baseApiUrlEc = "";
}

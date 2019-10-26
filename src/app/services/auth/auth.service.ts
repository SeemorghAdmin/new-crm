import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  GetInfoById(strID) {


    ///http://crm.nren.ir  
    this.http.get('http://localhost:8080/nern_test_war_exploded//api/get-login-info.jsp?id=' + strID).subscribe(
      res => {
        console.log(res);
      }
    );
  }

}

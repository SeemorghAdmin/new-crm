import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-uni-reports-info-modal',
  templateUrl: './uni-reports-info-modal.component.html',
  styleUrls: ['./uni-reports-info-modal.component.css']
})
export class UniReportsInfoModalComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private http: HttpClient) { }
  d;
  ngOnInit() {
    this.http.get('http://crm.nren.ir/api/get-uni-info.jsp?id=30901028371').subscribe(
      res => 
      {
        this.d = res;
        console.log(this.d);    
      }
    );
  }

}

import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-uni-status-log-modal',
  templateUrl: './uni-status-log-modal.component.html',
  styleUrls: ['./uni-status-log-modal.component.css']
})
export class UniStatusLogModalComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public http: HttpClient) { }
  d;
  ngOnInit() {
    this.http.get('http://crm.nren.ir/api/get-uni-status-logs.jsp?id=30901028371').subscribe(
      res => 
      {
        this.d = res;
        console.log(this.d);    
      }
    );
  }

}

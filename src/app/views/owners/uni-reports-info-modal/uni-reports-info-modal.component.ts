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
  edit1:boolean = false;
  edit2:boolean = false;
  edit3:boolean = false;
  edit4:boolean = false;
  ngOnInit() {
    this.http.get('http://crm.nren.ir/api/get-uni-info.jsp?id=30901028371').subscribe(
      res => 
      {
        this.d = res;
        console.log(this.d);    
      }
    );
  }

  editMosh()
  {
    this.edit1 = true;
    console.log('ok');
  }

  editMod()
  {
    this.edit2 = true;
  }

  editAdr()
  {
    this.edit3 = true;
  }

  editNam()
  {
    this.edit4 = true;
  }

}

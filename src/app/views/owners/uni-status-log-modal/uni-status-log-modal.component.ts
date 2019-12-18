import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { ConstantsService } from 'src/app/services/constants/constants.service';

@Component({
  selector: 'app-uni-status-log-modal',
  templateUrl: './uni-status-log-modal.component.html',
  styleUrls: ['./uni-status-log-modal.component.css']
})
export class UniStatusLogModalComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public http: HttpClient, public constants: ConstantsService) { }

  readonly BaseURL = this.constants.baseApiUrlEc;
  d: any=[{},{}];
  ngOnInit() {
    this.http.get(this.BaseURL + '/get-uni-status-logs.jsp?id=' + this.data.uniNationalId).subscribe(
      res =>
      {
        this.d = res;
      }
    );
  }

}

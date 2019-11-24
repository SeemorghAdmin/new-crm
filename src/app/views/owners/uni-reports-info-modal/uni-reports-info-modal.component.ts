import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-uni-reports-info-modal',
  templateUrl: './uni-reports-info-modal.component.html',
  styleUrls: ['./uni-reports-info-modal.component.css']
})
export class UniReportsInfoModalComponent implements OnInit {

  public element;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.element = data;
    console.log(this.element);
   }

  ngOnInit() {
  }

}

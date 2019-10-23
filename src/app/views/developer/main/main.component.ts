import { Component, OnInit } from '@angular/core';
import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-dev-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class DevMainComponent implements OnInit {




  constructor(config: NgbDropdownConfig) {
    config.placement = 'bottom-left';
    config.autoClose = true;
  }

  ngOnInit() {
  }

}

import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { FormControl } from '@angular/forms';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { UniReportsInfoModalComponent } from '../uni-reports-info-modal/uni-reports-info-modal.component';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { EcCustomersService } from 'src/app/services/owners/ec-customers.service';
import { UniStatusLogModalComponent } from '../uni-status-log-modal/uni-status-log-modal.component';
import { UniDeleteComponent } from './../uni-delete/uni-delete.component';
import { PersonService } from './../../../services/person/person.service';
import { ManageUniStatusComponent } from '../manage-uni-status/manage-uni-status.component';

export interface Customer {
  uniName: string;
  uniNationalId: number;
  uniType: string;
  state: string;
  city: string;
  status: string;
  subStatus: string;
  lastEditTime: string;
  subscriptionTime: string;
}




@Component({
  selector: 'app-uni-reports',
  templateUrl: './uni-reports.component.html',
  styleUrls: ['./uni-reports.component.css']
})
export class UniReportsComponent implements OnInit {

  constructor(public dialog: MatDialog, public service: EcCustomersService, private route: ActivatedRoute, private router: Router, private ser: PersonService) { }

  CUSTOMER_DATA: Customer[] = [];
  displayedColumns: string[] = ['uniNationalId', 'uniName', 'uniType', 'state', 'city', 'info', 'status', 'subStatus', 'lastEditTime', 'subscriptionTime', 'map', 'actions'];
  dataSource : MatTableDataSource<Customer>;

  id;
  isOstani:boolean = false;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  uniNationalIdFilter = new FormControl();
  uniNameFilter = new FormControl();
  uniTypeFilter = new FormControl();
  stateFilter = new FormControl();
  cityFilter = new FormControl();

  filteredValues = {
    uniNationalId: '', uniName: '', uniType: '',
    state: '', city: ''
  };

  ngOnInit() {

    this.dataSource = new MatTableDataSource();
    this.route.paramMap.subscribe( res => {
      this.id = res.get('id');
      if (this.id == 4) {
        this.id= this.ser.userId;
        this.isOstani = true;
      }
        this.getUniData();
    });

    this.dataSource.paginator = this.paginator;
    this.dataSource.paginator.pageSize = 10;
    this.dataSource.sort = this.sort;


    this.uniNationalIdFilter.valueChanges.subscribe((uniNationalIdFilterValue) => {
      this.filteredValues['uniNationalId'] = uniNationalIdFilterValue;
      this.dataSource.filter = JSON.stringify(this.filteredValues);
    });

    this.uniNameFilter.valueChanges.subscribe((uniNameFilterValue) => {
      this.filteredValues['uniName'] = uniNameFilterValue;
      this.dataSource.filter = JSON.stringify(this.filteredValues);
    });

    this.uniTypeFilter.valueChanges.subscribe((uniTypeFilterValue) => {
      this.filteredValues['uniType'] = uniTypeFilterValue;
      this.dataSource.filter = JSON.stringify(this.filteredValues);
    });

    this.stateFilter.valueChanges.subscribe((stateFilterValue) => {
      this.filteredValues['state'] = stateFilterValue;
      this.dataSource.filter = JSON.stringify(this.filteredValues);
    });

    this.cityFilter.valueChanges.subscribe((cityFilterValue) => {
      this.filteredValues['city'] = cityFilterValue;
      this.dataSource.filter = JSON.stringify(this.filteredValues);
    });

    this.dataSource.filterPredicate = this.customFilterPredicate();
  }

  applyFilter(filter) {
    this.dataSource.filter = JSON.stringify(this.filteredValues);

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }

  }

  getUniData(): Array<Customer>{
    this.service.GetList(this.id, this.isOstani).subscribe( res => {

      this.CUSTOMER_DATA = res as Customer[];
      this.dataSource.data = this.CUSTOMER_DATA;
    });
    this.isOstani = false;
    return this.CUSTOMER_DATA;
  }
  // numFilter(filterValue: string) {
  //   this.dataSource.filter = filterValue.trim().toLowerCase();
  //   this.dataSource.filterPredicate = (data: any, fitlerString: string) => {

  //       return data.uniNationalId == filterValue;
  //   };
  //   this.dataSource.filter = filterValue;
  // }

  customFilterPredicate() {
    const myFilterPredicate = (data: Customer, filter: string): boolean => {

      let searchString = JSON.parse(filter);
      return data.uniNationalId.toString().trim().indexOf(searchString.uniNationalId) !== -1 &&
        data.uniName.toString().trim().toLowerCase().indexOf(searchString.uniName.toLowerCase()) !== -1 &&
        data.uniType.toString().trim().toLowerCase().indexOf(searchString.uniType.toLowerCase()) !== -1 &&
        data.state.toString().trim().toLowerCase().indexOf(searchString.state.toLowerCase()) !== -1 &&
        data.city.toString().trim().toLowerCase().indexOf(searchString.city.toLowerCase()) !== -1;
    }
    return myFilterPredicate;
  }

  openDialog(element:Customer) {
    const dialogRef = this.dialog.open(UniReportsInfoModalComponent,{
      data: element,
    });

    dialogRef.afterClosed().subscribe(result => {
      // console.log(`Dialog result: ${result}`);
    });
  }

  openDelete(element:Customer) {
    const dialogRef = this.dialog.open(UniDeleteComponent,{
      data: element,
    });

    dialogRef.afterClosed().subscribe(result => {
      // console.log(`Dialog result: ${result}`);
    });
  }



  openLog(element:Customer) {
    const dialogRef = this.dialog.open(UniStatusLogModalComponent,{
      data: element,
    });

    dialogRef.afterClosed().subscribe(result => {
      // console.log(`Dialog result: ${result}`);
    });
  }
  openEditlog(element:Customer) {
    const dialogRef = this.dialog.open(ManageUniStatusComponent,{
      data: element,
    });

    dialogRef.afterClosed().subscribe(result => {
      // console.log(`Dialog result: ${result}`);
    });
  }
}

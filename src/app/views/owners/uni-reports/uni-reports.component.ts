import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { FormControl } from '@angular/forms';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { UniReportsInfoModalComponent } from '../uni-reports-info-modal/uni-reports-info-modal.component';

export interface PeriodicElement {
  custName: string;
  custNationalID: number;
  custType: string;
  custState: string;
  custCity: string;
  status: string;
  subStatus: string;
  lastEditTime: string;
  subscriptionTime: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { custNationalID: 1, custName: 'مرکز آموزش علمی کاربردی بیرجند1', custType: 'مراکز و موسسات آموزش علمی و کاربردی با کد مستقل', custState: 'خراسان جنوبی', custCity:'بیرجند', status:'ارسال قرارداد اشتراک جهت امضاء متقاضی', subStatus:'-', lastEditTime:'شنبه , ۲۵ آبان ۱۳۹۸ ۱۴:۳۰:۲۶',  subscriptionTime:'شنبه , ۲۵ آبان ۱۳۹۸ ۱۴:۲۹:۵۸	'},
  { custNationalID: 2, custName: 'مرکز آموزش علمی کاربردی بیرجند2', custType: 'مراکز و موسسات آموزش علمی و کاربردی با کد مستقل', custState: 'یزد', custCity:'یزد', status:'ارسال قرارداد اشتراک جهت امضاء متقاضی', subStatus:'-', lastEditTime:'شنبه , ۲۵ آبان ۱۳۹۸ ۱۴:۳۰:۲۶',  subscriptionTime:'شنبه , ۲۵ آبان ۱۳۹۸ ۱۴:۲۹:۵۸	'},
  { custNationalID: 3, custName: 'مرکز آموزش علمی کاربردی بیرجند3', custType: 'مراکز و موسسات آموزش علمی و کاربردی با کد مستقل', custState: 'تهران', custCity:'تهران', status:'ارسال قرارداد اشتراک جهت امضاء متقاضی', subStatus:'-', lastEditTime:'شنبه , ۲۵ آبان ۱۳۹۸ ۱۴:۳۰:۲۶',  subscriptionTime:'شنبه , ۲۵ آبان ۱۳۹۸ ۱۴:۲۹:۵۸	'},
];


@Component({
  selector: 'app-uni-reports',
  templateUrl: './uni-reports.component.html',
  styleUrls: ['./uni-reports.component.css']
})
export class UniReportsComponent implements OnInit {

  constructor(public dialog: MatDialog) { }


  displayedColumns: string[] = ['custNationalID', 'custName', 'custType', 'state', 'city', 'info', 'status', 'subStatus', 'lastEditTime', 'subscriptionTime', 'map', 'actions'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);


  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  custNationalIDFilter = new FormControl();
  custNameFilter = new FormControl();
  custTypeFilter = new FormControl();
  custStateFilter = new FormControl();
  custCityFilter = new FormControl();

  filteredValues = {
    custNationalID: '', custName: '', custType: '',
    custState: '', custCity: ''
  };

  ngOnInit() {

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this.custNationalIDFilter.valueChanges.subscribe((custNationalIDFilterValue) => {
      this.filteredValues['custNationalID'] = custNationalIDFilterValue;
      this.dataSource.filter = JSON.stringify(this.filteredValues);
    });

    this.custNameFilter.valueChanges.subscribe((custNameFilterValue) => {
      this.filteredValues['custName'] = custNameFilterValue;
      this.dataSource.filter = JSON.stringify(this.filteredValues);
    });

    this.custTypeFilter.valueChanges.subscribe((custTypeFilterValue) => {
      this.filteredValues['custType'] = custTypeFilterValue;
      this.dataSource.filter = JSON.stringify(this.filteredValues);
    });

    this.custStateFilter.valueChanges.subscribe((custStateFilterValue) => {
      this.filteredValues['custState'] = custStateFilterValue;
      this.dataSource.filter = JSON.stringify(this.filteredValues);
    });

    this.custCityFilter.valueChanges.subscribe((custCityFilterValue) => {
      this.filteredValues['custCity'] = custCityFilterValue;
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

  // numFilter(filterValue: string) {
  //   this.dataSource.filter = filterValue.trim().toLowerCase();
  //   this.dataSource.filterPredicate = (data: any, fitlerString: string) => {

  //       return data.custNationalID == filterValue;
  //   };
  //   this.dataSource.filter = filterValue;
  // }

  customFilterPredicate() {
    const myFilterPredicate = (data: PeriodicElement, filter: string): boolean => {

      let searchString = JSON.parse(filter);
      return data.custNationalID.toString().trim().indexOf(searchString.custNationalID) !== -1 &&
        data.custName.toString().trim().toLowerCase().indexOf(searchString.custName.toLowerCase()) !== -1 &&
        data.custType.toString().trim().toLowerCase().indexOf(searchString.custType.toLowerCase()) !== -1 &&
        data.custState.toString().trim().toLowerCase().indexOf(searchString.custState.toLowerCase()) !== -1 &&
        data.custCity.toString().trim().toLowerCase().indexOf(searchString.custCity.toLowerCase()) !== -1;
    }
    return myFilterPredicate;
  }

  openDialog(element:PeriodicElement) {
    const dialogRef = this.dialog.open(UniReportsInfoModalComponent,{
      data: element,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}

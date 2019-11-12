

import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { FormControl } from '@angular/forms';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { ModalComponent } from '../../public/modal/modal.component';
import { HttpClient } from '@angular/common/http';



export interface ReportUni {

  uniNationalId: number;
  uniName:string;
  uniSubCode:number;
  uniType:number;
  stateName:string;
  cityName:string;
  registerDate:string;
  numService:number;
}








@Component({
  selector: 'app-show-uni-report',
  templateUrl: './show-uni-report.component.html',
  styleUrls: ['./show-uni-report.component.css']
})

export class ShowUniReportComponent implements OnInit {

  
  strID: string;

  public ELEMENT_DATA: ReportUni[];
 
  constructor(public dialog: MatDialog, public http: HttpClient) { }

  displayedColumns: string[] = ['uniNationalId', 'uniName', 'uniSubCode','uniType','stateName','cityName', 'registerDate','numService'
 ];
  dataSource = new MatTableDataSource(this.ELEMENT_DATA);


  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  custNationalIDFilter = new FormControl();
  custNameFilter = new FormControl();

  filteredValues = {
    uniNationalId: '', uniName: '', uniSubCode: '', uniType: '', stateName:'',
    cityName:'', registerDate:'', numService: ''
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

    // this.dataSource.filterPredicate = this.customFilterPredicate();


    this.http.get('http://crm.nren.ir/api/get-cra-report.jsp?sub-code=0').subscribe(
    res=>{
      console.log(res);
      // this.ELEMENT_DATA=res;
    });
  }

  applyFilter(filter) {
    this.dataSource.filter = JSON.stringify(this.filteredValues);

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  

  // customFilterPredicate() {
  //   const myFilterPredicate = (data: ELEMENT_DATA, filter: string): boolean => {

  //     let searchString = JSON.parse(filter);
  //     return data.custNationalID.toString().trim().indexOf(searchString.custNationalID) !== -1 &&
  //       data.custName.toString().trim().toLowerCase().indexOf(searchString.custName.toLowerCase()) !== -1;
  //   }
  //   return myFilterPredicate;
  // }

  // openDialog(element:ELEMENT_DATA) {
  //   const dialogRef = this.dialog.open(ModalComponent,{
  //     data: { name: element.custName },
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log(`Dialog result: ${result}`);
  //   });
  // }

}

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

  ELEMENT_DATA: ReportUni[] = [];

  constructor(public dialog: MatDialog, public http: HttpClient) { }

  displayedColumns: string[] = ['uniNationalId', 'uniName', 'uniSubCode','stateName','cityName', 'registerDate','numService'
 ];
  dataSource : MatTableDataSource<ReportUni>;


  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  uniNationalIDFilter = new FormControl();
  uniNameFilter = new FormControl();
  stateNameFilter = new FormControl();
  cityNameFilter = new FormControl();

  filteredValues = {
    uniNationalId: '', uniName: '', uniSubCode: '', uniType: '', stateName:'',
    cityName:'', registerDate:'', numService: ''
  };



  ngOnInit() {

    this.dataSource = new MatTableDataSource();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.getUniData();

    this.uniNationalIDFilter.valueChanges.subscribe((uniNationalIDFilterValue) => {
      this.filteredValues['uniNationalId'] = uniNationalIDFilterValue;
      this.dataSource.filter = JSON.stringify(this.filteredValues);
    });

    this.uniNameFilter.valueChanges.subscribe((uniNameFilterValue) => {
      this.filteredValues['uniName'] = uniNameFilterValue;
      this.dataSource.filter = JSON.stringify(this.filteredValues);
    });

    this.stateNameFilter.valueChanges.subscribe((stateNameFilterValue) => {
      this.filteredValues['stateName'] = stateNameFilterValue;
      this.dataSource.filter = JSON.stringify(this.filteredValues);
    });

    this.cityNameFilter.valueChanges.subscribe((cityNameFilterValue) => {
      this.filteredValues['cityName'] = cityNameFilterValue;
      this.dataSource.filter = JSON.stringify(this.filteredValues);
    });

    this.dataSource.filterPredicate = this.customFilterPredicate();

  }

  getUniData(): Array<ReportUni>{
    this.http.get('http://crm.nren.ir/api/get-cra-report.jsp?sub-code=0').subscribe(
      res=>{
        this.ELEMENT_DATA= res as ReportUni[];
        this.dataSource.data = this.ELEMENT_DATA;
      });
    return this.ELEMENT_DATA;
  }


  customFilterPredicate() {
    const myFilterPredicate = (data: ReportUni, filter: string): boolean => {

      let searchString = JSON.parse(filter);
      return data.uniNationalId.toString().trim().indexOf(searchString.uniNationalId) !== -1 &&
        (data.uniName.toString().trim().indexOf(searchString.uniName) !== -1 &&
        data.stateName.toString().trim().indexOf(searchString.stateName) !== -1 &&
        data.cityName.toString().trim().indexOf(searchString.cityName) !== -1);
    }
    return myFilterPredicate;
  }

  // openDialog(element:ELEMENT_DATA) {
  //   const dialogRef = this.dialog.open(ModalComponent,{
  //     data: { name: element.custName },
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log(`Dialog result: ${result}`);
  //   });
  // }

}

import { AddUniPreDataService } from './../../../services/owners/add-uni-pre-data.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { FormControl } from '@angular/forms';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { ModalComponent } from '../../public/modal/modal.component';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';



export interface ReportUni {

  row: number;
  uniName:string;
  uniCode:number;
  uniType:number;
  address:string;

  
}


@Component({
  selector: 'add-uni-pre-data',
  templateUrl: './add-uni-pre-data.component.html',
  styleUrls: ['./add-uni-pre-data.component.css']
})

export class AddUniPreDataComponent implements OnInit {


  constructor(public dialog: MatDialog, public http: HttpClient, public service: AddUniPreDataService, private toster: ToastrService) {

  }

  

  displayedColumns: string[] = ['id', 'uniInternalCode', 'uniType' ,  'name', 'address' , 
 ];
  dataSource : MatTableDataSource<ReportUni>;


  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  uniNationalIDFilter = new FormControl();
  uniNameFilter = new FormControl();
  uniTypeFilter = new FormControl();
  addressFilter = new FormControl();

  filteredValues = {
    id: '', uniInternalCode: '',  uniType: '', name:'' , address:'' 
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

    this.uniTypeFilter.valueChanges.subscribe((uniTypeFilterValue) => {
      this.filteredValues['stateName'] = uniTypeFilterValue;
      this.dataSource.filter = JSON.stringify(this.filteredValues);
    });

    this.addressFilter.valueChanges.subscribe((addressFilterValue) => {
      this.filteredValues['cityName'] = addressFilterValue;
      this.dataSource.filter = JSON.stringify(this.filteredValues);
    });



  }

  getUniData(){
    this.http.get('http://crm.nren.ir/api/get-pre-university-data.jsp?sub-code=0').subscribe(
      res=>{
        this.dataSource.data = res as ReportUni[];
      });
  }

  postUniData(){
    this.service.formModel.value.uniType = 1;
    this.service.PostpostUniData().subscribe(
      ress => {
          // tslint:disable: triple-equals
          if (ress == true) {
             this.toster.success('ثبت نام با موفقیت انجام شد');
          }
      },
      (err: any) => {
          if (err.status == 400) {
          this.toster.error(err.error);
          }
      });

  }


 

 


  

}

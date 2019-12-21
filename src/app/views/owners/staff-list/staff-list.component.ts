import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { FormControl } from '@angular/forms';
import { PersonService } from 'src/app/services/person/person.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';



export interface Customer {
  staffNumber: string;
  positionId: string;
  address: string;
  teleNumber: string;
  eduDegree: string;
  eduField: string;
  firstName: string;
  person: any;
  personNational_ID: string;
}
@Component({
  selector: 'app-staff-list',
  templateUrl: './staff-list.component.html',
  styleUrls: ['./staff-list.component.css']
})
export class StaffListComponent implements OnInit {

  constructor(private ser: PersonService) { }
  CUSTOMER_DATA: Customer[] = [];
  displayedColumns: string[] = ['personNational_ID', 'name', 'lastName','staffNumber', 'positionId', 'eduDegree','actions', ];
  dataSource : MatTableDataSource<Customer>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  NationalIdFilter = new FormControl();
  NameFilter = new FormControl();
  LastNameFilter = new FormControl();
  StaffNumberFilter = new FormControl();

  filteredValues = {
    NationalId: '', Name: '', LastName: '',
    StaffNumber: ''
  };
  ngOnInit() {
    this.dataSource = new MatTableDataSource();
    this.getUniData();

    this.dataSource.paginator = this.paginator;
    this.dataSource.paginator.pageSize = 10;
    this.dataSource.sort = this.sort;

    this.NationalIdFilter.valueChanges.subscribe((NationalIdFilterValue) => {
      this.filteredValues['NationalId'] = NationalIdFilterValue;
      this.dataSource.filter = JSON.stringify(this.filteredValues);
    });

    this.NameFilter.valueChanges.subscribe((uniNameFilterValue) => {
      this.filteredValues['Name'] = uniNameFilterValue;
      this.dataSource.filter = JSON.stringify(this.filteredValues);
    });

    this.LastNameFilter.valueChanges.subscribe((uniTypeFilterValue) => {
      this.filteredValues['LastName'] = uniTypeFilterValue;
      this.dataSource.filter = JSON.stringify(this.filteredValues);
    });

    this.StaffNumberFilter.valueChanges.subscribe((stateFilterValue) => {
      this.filteredValues['StaffNumber'] = stateFilterValue;
      this.dataSource.filter = JSON.stringify(this.filteredValues);
    });

   

    this.dataSource.filterPredicate = this.customFilterPredicate();
  }
  getUniData(): Array<Customer>{
    this.ser.getStaffList().subscribe( res => {
      
      this.CUSTOMER_DATA = res as Customer[];
      this.dataSource.data = this.CUSTOMER_DATA;
    });
    return this.CUSTOMER_DATA;
  }

  applyFilter(filter) {
    this.dataSource.filter = JSON.stringify(this.filteredValues);

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }

  } 
  
  customFilterPredicate() {
    const myFilterPredicate = (data: Customer, filter: string): boolean => {

      let searchString = JSON.parse(filter);
      
      return data.personNational_ID.toString().trim().indexOf(searchString.NationalId) !== -1 &&
        data.staffNumber.toString().trim().toLowerCase().indexOf(searchString.StaffNumber.toLowerCase()) !== -1 &&
        data.person.firstName.toString().trim().toLowerCase().indexOf(searchString.Name.toLowerCase()) !== -1 &&
        data.person.lastName.toString().trim().toLowerCase().indexOf(searchString.LastName.toLowerCase()) !== -1 
    }
    return myFilterPredicate;
  }
 
}

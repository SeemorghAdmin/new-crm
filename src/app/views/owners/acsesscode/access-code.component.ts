import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { FormControl } from '@angular/forms';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { ModalComponent } from '../../public/modal/modal.component';
import { HttpClient } from '@angular/common/http';
import { AccessCodeService } from './../../../services/person/accesscode.service';

export interface Person{
    personNational_ID: string;
    firstName:string;
    lastName:string;
}

@Component({
    selector: 'access-code',
    templateUrl: 'access-code.component.html',
    styleUrls: ['./access-code.component.css']
})

export class AccessCodeComponent implements OnInit {

    ELEMENT_DATA: Person[] = [];

    constructor(public service: AccessCodeService, public dialog: MatDialog) { }

    displayedColumns: string[] = ['personNational_ID', 'firstName', 'lastName' ];
  dataSource : MatTableDataSource<Person>;


  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  personNational_ID = new FormControl();
  firstName = new FormControl();
  lastName = new FormControl();
 

  filteredValues = {
    personNational_ID: '', firstName: '', lastName: ''};
    
    ngOnInit() { 
        this.dataSource = new MatTableDataSource();
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.getUniData();
    
        this.personNational_ID.valueChanges.subscribe((personNational_IDFilter) => {
          this.filteredValues['personNational_ID'] = personNational_IDFilter;
          this.dataSource.filter = JSON.stringify(this.filteredValues);
        });
    
        this.firstName.valueChanges.subscribe((firstNameFilter) => {
          this.filteredValues['firstName'] = firstNameFilter;
          this.dataSource.filter = JSON.stringify(this.filteredValues);
        });
    
        this.lastName.valueChanges.subscribe((lastNameFilter) => {
          this.filteredValues['lastName'] = lastNameFilter;
          this.dataSource.filter = JSON.stringify(this.filteredValues);
        });
    
       
    
        this.dataSource.filterPredicate = this.customFilterPredicate();
    }
    
    getUniData(): Array<Person>{
        this.service.GetPersonAll().subscribe(
          res=>{
            this.ELEMENT_DATA= res as Person[];
            this.dataSource.data = this.ELEMENT_DATA;

            console.log(res);
          });
          console.log(this.ELEMENT_DATA);
        return this.ELEMENT_DATA;
      }
    
    
      customFilterPredicate() {
        const myFilterPredicate = (data: Person, filter: string): boolean => {
    
          let searchString = JSON.parse(filter);
          return data.personNational_ID.toString().trim().indexOf(searchString.uniNationalId) !== -1 &&
            (data.firstName.toString().trim().indexOf(searchString.uniName) !== -1 &&
            data.lastName.toString().trim().indexOf(searchString.stateName) !== -1);
        }
        return myFilterPredicate;
      } 
}
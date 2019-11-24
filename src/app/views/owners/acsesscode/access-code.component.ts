import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { FormControl } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { AccessCodeService } from './../../../services/person/accesscode.service';
import { AccessCodeModalComponent } from '../access-code-modal/access-code-modal.component';
import { ToastrService } from 'ngx-toastr';

export interface Person {
  personNational_ID: string;
  firstName: string;
  lastName: string;
  accessCodes: string;
}

export interface AccessModifeir {
  id: number;
  title: string;
  active: boolean;
  catCategory: number;
  iString: string;
  selected: boolean;
}

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'access-code',
  templateUrl: 'access-code.component.html',
  styleUrls: ['./access-code.component.css']
})

export class AccessCodeComponent implements OnInit {

  accessstr: string
  ELEMENT_DATA: Person[] = [];
  item;
  userId: string;
  AccessData: AccessModifeir[] = [];

  constructor(public service: AccessCodeService, public dialog: MatDialog, public toster: ToastrService) { }

  displayedColumns: string[] = ['personNational_ID', 'firstName', 'lastName'];
  dataSource: MatTableDataSource<Person>;


  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  // tslint:disable: variable-name
  personNational_IDFilter = new FormControl();
  firstNameFilter = new FormControl();
  lastNameFilter = new FormControl();


  filteredValues = {
    personNational_ID: '', firstName: '', lastName: ''
  };

  ngOnInit() {
    this.dataSource = new MatTableDataSource();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.getUniData();

    this.personNational_IDFilter.valueChanges.subscribe((personNational_IDFilterValue) => {
      this.filteredValues.personNational_ID = personNational_IDFilterValue;
      this.dataSource.filter = JSON.stringify(this.filteredValues);
    });

    this.firstNameFilter.valueChanges.subscribe((firstNameFilter) => {
      this.filteredValues.firstName = firstNameFilter;
      this.dataSource.filter = JSON.stringify(this.filteredValues);
    });

    this.lastNameFilter.valueChanges.subscribe((lastNameFilter) => {
      this.filteredValues.lastName = lastNameFilter;
      this.dataSource.filter = JSON.stringify(this.filteredValues);
    });



    this.dataSource.filterPredicate = this.customFilterPredicate();
  }

  getUniData(): Array<Person> {
    this.service.GetPersonAll().subscribe(
      res => {
        this.ELEMENT_DATA = res as Person[];
        this.dataSource.data = this.ELEMENT_DATA;
      });
    this.service.GetAccessModifer().subscribe(
      res => {
        this.AccessData = res as AccessModifeir[];
      }
    );
    return this.ELEMENT_DATA;
  }


  customFilterPredicate() {
    const myFilterPredicate = (data: Person, filter: string): boolean => {

      const searchString = JSON.parse(filter);
      return data.personNational_ID.toString().trim().indexOf(searchString.personNational_ID) !== -1 &&
        (data.firstName.toString().trim().indexOf(searchString.firstName) !== -1 &&
          data.lastName.toString().trim().indexOf(searchString.lastName) !== -1);
    };
    return myFilterPredicate;
  }

  openDialog(element: Person) {
    this.userId = element.personNational_ID;

    this.item = element.firstName + ' ' + element.lastName;
    this.AccessData.forEach(element => {
      element.selected=false;
    });
    this.CheckRoel(element);
  }

  onSubmit() {
    this.accessstr = "&";

    this.AccessData.forEach(element => {
      if (element.selected) {
        this.accessstr = this.accessstr + element.iString.trim() + "&";
      }

    });

    this.service.formModel.value.UserId = this.userId;
    this.service.formModel.value.AccessCodes = this.accessstr;
    this.service.SetAccessCode().subscribe(
      res => {
        if (res == true) {
          this.toster.success('تخصیص دسترسی برای ' + this.item + ' موفقیت ثبت شد.');
        }
      });
  }

  CheckRoel(person: Person) {


    this.AccessData.forEach(accessElement => {


      for (let index = 1; index < person.accessCodes.toString().lastIndexOf('&'); index = index + 3) {
        const element = person.accessCodes[index] + person.accessCodes[index + 1];

        if (accessElement.iString===element){
          accessElement.selected=true;
        }
      }
    });

  }

}

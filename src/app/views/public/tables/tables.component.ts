import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { FormControl } from '@angular/forms';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { ModalComponent } from '../modal/modal.component';

export interface PeriodicElement {
  custName: string;
  custNationalID: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { custNationalID: 1, custName: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { custNationalID: 2, custName: 'Helium', weight: 4.0026, symbol: 'He' },
  { custNationalID: 3, custName: 'Lithium', weight: 6.941, symbol: 'Li' },
  { custNationalID: 4, custName: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { custNationalID: 5, custName: 'Boron', weight: 10.811, symbol: 'B' },
  { custNationalID: 6, custName: 'Carbon', weight: 12.0107, symbol: 'C' },
  { custNationalID: 7, custName: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { custNationalID: 8, custName: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { custNationalID: 9, custName: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { custNationalID: 10, custName: 'Neon', weight: 20.1797, symbol: 'Ne' },
  { custNationalID: 12, custName: 'Neon', weight: 20.1797, symbol: 'Ne' },
];


@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {

  constructor(public dialog: MatDialog) { }


  displayedColumns: string[] = ['custNationalID', 'custName', 'weight', 'actions'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);


  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  custNationalIDFilter = new FormControl();
  custNameFilter = new FormControl();

  filteredValues = {
    custNationalID: '', custName: '', weight: '',
    symbol: ''
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
        data.custName.toString().trim().toLowerCase().indexOf(searchString.custName.toLowerCase()) !== -1;
    }
    return myFilterPredicate;
  }

  openDialog(element:PeriodicElement) {
    const dialogRef = this.dialog.open(ModalComponent,{
      data: { name: element.custName },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}

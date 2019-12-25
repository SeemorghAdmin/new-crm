import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { FormControl } from '@angular/forms';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { UniReportsInfoModalComponent } from '../uni-reports-info-modal/uni-reports-info-modal.component';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { UniService } from 'src/app/services/owners/uni-service.service';
import { UniStatusLogModalComponent } from '../uni-status-log-modal/uni-status-log-modal.component';
import { UniDeleteComponent } from './../uni-delete/uni-delete.component';
import { PersonService } from './../../../services/person/person.service';
import { ToastrService } from 'ngx-toastr';

export interface Customer{
  id: number;
  uniName: string;
  title: string;
  status: string;
  serviceFormContractNo: number;
  subscriptionDate: string;
  exampleForm: string;
  signedForm: string;
  finalSignedForm: string;
  letter: string;
  postReceipt: string;
  iD: number;
  canUpload: boolean;
}

@Component({
  selector: 'app-uni-service-requst',
  templateUrl: './uni-service-requst.component.html',
  styleUrls: ['./uni-service-requst.component.css']
})

export class UniServiceRequstComponent implements OnInit {

  constructor(public dialog: MatDialog, public service: UniService, private route: ActivatedRoute, private router: Router, private ser: PersonService, private toster: ToastrService) { }

  CUSTOMER_DATA: Customer[] = [];
  displayedColumns: string[] = [ 'uniName', 'title', 'status', 'serviceFormContractNo', 'subscriptionDate', 'exampleForm', 'signedForm',
                                  'finalSignedForm',  'letter', 'postReceipt', 'operation'];
  dataSource : MatTableDataSource<Customer>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  uniNameFilter = new FormControl();
  titleFilter = new FormControl();
  statusFilter = new FormControl();


  filteredValues = {
    uniName: '', title: '', status: '',
    serviceFormContractNo: '', subscriptionDate: ''
  };

  ngOnInit() {
    this.dataSource = new MatTableDataSource();
    this.getUniData()
    this.dataSource.paginator = this.paginator;
    this.dataSource.paginator.pageSize = 10;
    this.dataSource.sort = this.sort;


    this.uniNameFilter.valueChanges.subscribe((uniNameFilterValue) => {
      this.filteredValues['uniName'] = uniNameFilterValue;
      this.dataSource.filter = JSON.stringify(this.filteredValues);
    });

    this.titleFilter.valueChanges.subscribe((titleFilterValue) => {
      this.filteredValues['title'] = titleFilterValue;
      this.dataSource.filter = JSON.stringify(this.filteredValues);
    });

    this.statusFilter.valueChanges.subscribe((statusFilterValue) => {
      this.filteredValues['status'] = statusFilterValue;
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

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  getUniData(): Array<Customer>{
    this.service.GetList().subscribe( res => {
      this.CUSTOMER_DATA = res as Customer[];
      this.dataSource.data = this.CUSTOMER_DATA;
    });
    return this.CUSTOMER_DATA;
  }

  delete(element: Customer)
  {
    this.service.Delete(element.id).subscribe(
      res => {
        if (res == true) {
          this.toster.success('سرویس فرم ' + element.uniName + ' حذف شد.')
        } else {
          this.toster.error('خطایی در انجام عملیات رخ داد.')
        }
      }
    )
  }

  customFilterPredicate() {
    const myFilterPredicate = (data: Customer, filter: string): boolean => {

      let searchString = JSON.parse(filter);
      return data.uniName.toString().trim().indexOf(searchString.uniNationalId) !== -1 &&
        data.title.toString().trim().toLowerCase().indexOf(searchString.uniName.toLowerCase()) !== -1 &&
        data.status.toString().trim().toLowerCase().indexOf(searchString.uniType.toLowerCase()) !== -1

    }
    return myFilterPredicate;
  }
  getUploadPage(item: Customer)
  {
    console.log(item.canUpload);
    this.router.navigateByUrl('/owner/home/app-service-file-upload/' + item.id);
  }

}

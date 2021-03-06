import { AddUniPreDataService } from './../../../services/owners/add-uni-pre-data.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { FormControl } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ModalComponent } from '../../public/modal/modal.component';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { ConstantsService } from 'src/app/services/constants/constants.service';




export interface ReportUni {

  //معرفی فیلدهای جدول
  id: number;
  uniInternalCode: number;
  sourceVal: number;
  name: string;
  address: string;


}

@Component({
  selector: 'add-uni-pre-data',
  templateUrl: './add-uni-pre-data.component.html',
  styleUrls: ['./add-uni-pre-data.component.css']
})


// برای اضافه کردن نوع مرکز، کد دانشگاه، نام دانشگاه و آدرس دانشگاه
export class AddUniPreDataComponent implements OnInit {

  valu;
  constructor(public dialog: MatDialog, public http: HttpClient, public service: AddUniPreDataService, private toster: ToastrService,
    public constants: ConstantsService) {

  }

  readonly BaseURL = this.constants.baseApiUrlEc;

  // خواندن اطلاعات دیتا بیس برای نمایش در جدول

  //مواردی که در ستون های جدول نمایش داده می شوند
  displayedColumns: string[] = ['id', 'uniInternalCode', 'sourceVal', 'name', 'address',
  ];
  dataSource: MatTableDataSource<ReportUni>;


  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  uniInternalCodeFilter = new FormControl();
  uniNameFilter = new FormControl();
  addressFilter = new FormControl();
  sourceValFilter = new FormControl();
  idFilter = new FormControl();

  filteredValues = {
    uniInternalCode: '', name: '', address: '', sourceVal: '', id: ''
  };


  ngOnInit() {

    this.dataSource = new MatTableDataSource();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.getUniData();


    this.uniInternalCodeFilter.valueChanges.subscribe((uniInternalCodeFilterValue) => {
      this.filteredValues['uniInternalCode'] = uniInternalCodeFilterValue;
      this.dataSource.filter = JSON.stringify(this.filteredValues);
    });

    this.uniNameFilter.valueChanges.subscribe((uniNameFilterValue) => {
      this.filteredValues['name'] = uniNameFilterValue;
      this.dataSource.filter = JSON.stringify(this.filteredValues);
    });

    this.addressFilter.valueChanges.subscribe((addressFilterValue) => {
      this.filteredValues['address'] = addressFilterValue;
      this.dataSource.filter = JSON.stringify(this.filteredValues);
    });


    this.addressFilter.valueChanges.subscribe((sourceValFilterValue) => {
      this.filteredValues['sourceVal'] = sourceValFilterValue;
      this.dataSource.filter = JSON.stringify(this.filteredValues);
    });
    this.idFilter.valueChanges.subscribe((idFilterValue) => {
      this.filteredValues['id'] = idFilterValue;
      this.dataSource.filter = JSON.stringify(this.filteredValues);
    });

  }
  //دریافت اطلاعات دیتابیس
  getUniData() {
    this.http.get(this.BaseURL + '/get-pre-university-data.jsp?sub-code=0').subscribe(
      res => {
        this.dataSource.data = res as ReportUni[];
      });
  }
  filterForeCasts(filterVal: any) {
    this.valu = filterVal;
  }
  //ارسال اطلاعات برای دیتابیس
  // درصورتی که عمل ثبت انجام شود پیام ثبت نام با موفقیت انجام شد رانمایش می دهد.
  postUniData() {
    this.service.formModel.value.UniType = this.valu;
    this.service.PostpostUniData().subscribe(
      res => {
        if (res == true) {
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

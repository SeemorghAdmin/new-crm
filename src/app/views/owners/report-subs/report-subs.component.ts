import { element } from 'protractor';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { FormControl } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ModalComponent } from '../../public/modal/modal.component';
import { HttpClient } from '@angular/common/http';
import { removeSummaryDuplicates } from '@angular/compiler';
import { ConstantsService } from 'src/app/services/constants/constants.service';


export interface ReportUni {
  typeVal: number;
  uniStatus: number;
  uniSubCode: number;
}

@Component({
  selector: 'report-subs',
  templateUrl: './report-subs.component.html',
  styleUrls: ['./report-subs.component.css']
})
export class ReportSubsComponent implements OnInit {
  strID: string;
  ELEMENT_DATA: ReportUni[] = [];

  constructor(public dialog: MatDialog, public http: HttpClient, public constants: ConstantsService) { }


  readonly BaseURL = this.constants.baseApiUrlEc;
  dataSource: MatTableDataSource<ReportUni>;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  ngOnInit() {
    this.dataSource = new MatTableDataSource();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.getUniData();
  }

  total: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0, 0]; totalsum: number = 0; sum: number[] = [0, 0, 0, 0, 0,0];
  a: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0]; b: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0];
  c: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0]; d: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0];
  e: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0];

  getUniData(): Array<ReportUni> {
    this.http.get(this.BaseURL + '/univercity/ReportSubs').subscribe(
      res => {
        this.ELEMENT_DATA = res as ReportUni[];

        for (let i = 0; i < this.ELEMENT_DATA.length; i++) {

          //1 unies
          //kole darkhast ha - دانشگاه‌های دولتی مورد تایید وزارت علوم,تحقیقات و فناوری
          if (this.ELEMENT_DATA[i].uniSubCode== 0) {

            if (this.ELEMENT_DATA[i].typeVal == 0) {
              this.total[0] = this.total[0] + 1;
            }


            //baghie sotoon ha
            if (this.ELEMENT_DATA[i].typeVal == 0 && this.ELEMENT_DATA[i].uniStatus == 1) {
              this.a[0] = this.a[0] + 1;
            }

            if (this.ELEMENT_DATA[i].typeVal == 0 && this.ELEMENT_DATA[i].uniStatus == 1000) {
              this.b[0] = this.b[0] + 1;
            }

            if (this.ELEMENT_DATA[i].typeVal == 0 && this.ELEMENT_DATA[i].uniStatus == 1001) {
              this.c[0] = this.c[0] + 1;
            }

            if (this.ELEMENT_DATA[i].typeVal == 0 && this.ELEMENT_DATA[i].uniStatus == 2000) {
              this.d[0] = this.d[0] + 1;
            }
            if (this.ELEMENT_DATA[i].typeVal == 0 && this.ELEMENT_DATA[i].uniStatus == 3006) {
              this.e[0] = this.e[0] + 1;
            }

            //2
            //kole darkhast ha - دانشگاه‌های دولتی مورد تایید وزارت بهداشت و درمان و آموزش پزشکی
            if (this.ELEMENT_DATA[i].typeVal == 1) {
              this.total[1] = this.total[1] + 1;
            }

            //baghie sotoon ha
            if (this.ELEMENT_DATA[i].typeVal == 1 && this.ELEMENT_DATA[i].uniStatus == 1) {
              this.a[1] = this.a[1] + 1;
            }

            if (this.ELEMENT_DATA[i].typeVal == 1 && this.ELEMENT_DATA[i].uniStatus == 1000) {
              this.b[1] = this.b[1] + 1;
            }

            if (this.ELEMENT_DATA[i].typeVal == 1 && this.ELEMENT_DATA[i].uniStatus == 1001) {
              this.c[1] = this.c[1] + 1;
            }

            if (this.ELEMENT_DATA[i].typeVal == 1 && this.ELEMENT_DATA[i].uniStatus == 2000) {
              this.d[1] = this.d[1] + 1;
            }
            if (this.ELEMENT_DATA[i].typeVal == 1 && this.ELEMENT_DATA[i].uniStatus == 3006) {
              this.e[1] = this.e[1] + 1;
            }


            //3
            //kole darkhast ha - دانشگاه‌های غیر‌دولتی(غیر انتفاعی)
            if (this.ELEMENT_DATA[i].typeVal == 2) {
              this.total[2] = this.total[2] + 1;
            }

            //baghie sotoon ha
            if (this.ELEMENT_DATA[i].typeVal == 2 && this.ELEMENT_DATA[i].uniStatus == 1) {
              this.a[2] = this.a[2] + 1;
            }

            if (this.ELEMENT_DATA[i].typeVal == 2 && this.ELEMENT_DATA[i].uniStatus == 1000) {
              this.b[2] = this.b[2] + 1;
            }

            if (this.ELEMENT_DATA[i].typeVal == 2 && this.ELEMENT_DATA[i].uniStatus == 1001) {
              this.c[2] = this.c[2] + 1;
            }

            if (this.ELEMENT_DATA[i].typeVal == 2 && this.ELEMENT_DATA[i].uniStatus == 2000) {
              this.d[2] = this.d[2] + 1;
            }


            if (this.ELEMENT_DATA[i].typeVal == 1 && this.ELEMENT_DATA[i].uniStatus == 3006) {
              this.e[2] = this.e[2] + 1;
            }



            //4
            //kole darkhast ha - دانشگاه آزاد اسلامی و واحدهای آن
            if (this.ELEMENT_DATA[i].typeVal == 3) {
              this.total[3] = this.total[3] + 1;
            }

            //baghie sotoon ha
            if (this.ELEMENT_DATA[i].typeVal == 3 && this.ELEMENT_DATA[i].uniStatus == 1) {
              this.a[3] = this.a[3] + 1;
            }

            if (this.ELEMENT_DATA[i].typeVal == 3 && this.ELEMENT_DATA[i].uniStatus == 1000) {
              this.b[3] = this.b[3] + 1;
            }

            if (this.ELEMENT_DATA[i].typeVal == 3 && this.ELEMENT_DATA[i].uniStatus == 1001) {
              this.c[3] = this.c[3] + 1;
            }

            if (this.ELEMENT_DATA[i].typeVal == 3 && this.ELEMENT_DATA[i].uniStatus == 2000) {
              this.d[3] = this.d[3] + 1;
            }
            if (this.ELEMENT_DATA[i].typeVal == 3 && this.ELEMENT_DATA[i].uniStatus == 3006) {
              this.e[3] = this.e[3] + 1;
            }


            //5
            //kole darkhast ha - دانشگاه پیام نور و مراکز و واحدهای آن
            if (this.ELEMENT_DATA[i].typeVal == 4) {
              this.total[4] = this.total[4] + 1;
            }

            //baghie sotoon ha
            if (this.ELEMENT_DATA[i].typeVal == 4 && this.ELEMENT_DATA[i].uniStatus == 1) {
              this.a[4] = this.a[4] + 1;
            }

            if (this.ELEMENT_DATA[i].typeVal == 4 && this.ELEMENT_DATA[i].uniStatus == 1000) {
              this.b[4] = this.b[4] + 1;
            }

            if (this.ELEMENT_DATA[i].typeVal == 4 && this.ELEMENT_DATA[i].uniStatus == 1001) {
              this.c[4] = this.c[4] + 1;
            }

            if (this.ELEMENT_DATA[i].typeVal == 4 && this.ELEMENT_DATA[i].uniStatus == 2000) {
              this.d[4] = this.d[4] + 1;
            }
            if (this.ELEMENT_DATA[i].typeVal == 4 && this.ELEMENT_DATA[i].uniStatus == 3006) {
              this.e[4] = this.e[4] + 1;
            }

            //6
            //kole darkhast ha - سایر
            if (this.ELEMENT_DATA[i].typeVal == 8) {
              this.total[5] = this.total[5] + 1;
            }

            //baghie sotoon ha
            if (this.ELEMENT_DATA[i].typeVal == 8 && this.ELEMENT_DATA[i].uniStatus == 1) {
              this.a[5] = this.a[5] + 1;
            }

            if (this.ELEMENT_DATA[i].typeVal == 8 && this.ELEMENT_DATA[i].uniStatus == 1000) {
              this.b[5] = this.b[5] + 1;
            }

            if (this.ELEMENT_DATA[i].typeVal == 8 && this.ELEMENT_DATA[i].uniStatus == 1001) {
              this.c[5] = this.c[5] + 1;
            }

            if (this.ELEMENT_DATA[i].typeVal == 8 && this.ELEMENT_DATA[i].uniStatus == 2000) {
              this.d[5] = this.d[5] + 1;
            }

            if (this.ELEMENT_DATA[i].typeVal == 8 && this.ELEMENT_DATA[i].uniStatus == 3006) {
              this.e[5] = this.e[5] + 1;
            }

            //7
            //kole darkhast ha - مراکز و موسسات آموزش علمی و کاربردی با کد مستقل
            if (this.ELEMENT_DATA[i].typeVal == 9) {
              this.total[6] = this.total[6] + 1;

              res = this.total;
            }

            //baghie sotoon ha
            if (this.ELEMENT_DATA[i].typeVal == 9 && this.ELEMENT_DATA[i].uniStatus == 1) {
              this.a[6] = this.a[6] + 1;
            }

            if (this.ELEMENT_DATA[i].typeVal == 9 && this.ELEMENT_DATA[i].uniStatus == 1000) {
              this.b[6] = this.b[6] + 1;
            }

            if (this.ELEMENT_DATA[i].typeVal == 9 && this.ELEMENT_DATA[i].uniStatus == 1001) {
              this.c[6] = this.c[6] + 1;
            }

            if (this.ELEMENT_DATA[i].typeVal == 9 && this.ELEMENT_DATA[i].uniStatus == 2000) {
              this.d[6] = this.d[6] + 1;
            }

            if (this.ELEMENT_DATA[i].typeVal == 9 && this.ELEMENT_DATA[i].uniStatus == 3006) {
              this.e[6] = this.e[6] + 1;
            }

            //8
            //kole darkhast ha - مراکز و موسسات آموزش علمی و کاربردی با کد مرکز
            if (this.ELEMENT_DATA[i].typeVal == 10) {
              this.total[7] = this.total[7] + 1;
            }

            // //baghie sotoon ha
            if (this.ELEMENT_DATA[i].typeVal == 9 && this.ELEMENT_DATA[i].uniStatus == 1) {
              this.a[7] = this.a[7] + 1;
            }
            if (this.ELEMENT_DATA[i].typeVal == 10 && this.ELEMENT_DATA[i].uniStatus == 1000) {
              this.b[7] = this.b[7] + 1;
            }

            if (this.ELEMENT_DATA[i].typeVal == 10 && this.ELEMENT_DATA[i].uniStatus == 1001) {
              this.c[7] = this.c[7] + 1;
            }

            if (this.ELEMENT_DATA[i].typeVal == 10 && this.ELEMENT_DATA[i].uniStatus == 2000) {
              this.d[7] = this.d[7] + 1;
            }
            if (this.ELEMENT_DATA[i].typeVal == 10 && this.ELEMENT_DATA[i].uniStatus == 3006) {
              this.e[7] = this.e[7] + 1;
            }
          }

          //hoze 9
          //kole darkhast ha - حوزه‌های علمیه مورد تایید مرکز مدیریت حوزه‌های علمیه قم
          if (this.ELEMENT_DATA[i].uniSubCode == 1) {

            if (this.ELEMENT_DATA[i].typeVal == 0) {
              this.total[8] = this.total[8] + 1;
            }

            //baghie sotoon ha
            if (this.ELEMENT_DATA[i].typeVal == 0 && this.ELEMENT_DATA[i].uniStatus == 1) {
              this.a[8] = this.a[8] + 1;
            }

            if (this.ELEMENT_DATA[i].typeVal == 0 && this.ELEMENT_DATA[i].uniStatus == 1000) {
              this.b[8] = this.b[8] + 1;
            }

            if (this.ELEMENT_DATA[i].typeVal == 0 && this.ELEMENT_DATA[i].uniStatus == 1001) {
              this.c[8] = this.c[8] + 1;
            }

            if (this.ELEMENT_DATA[i].typeVal == 0 && this.ELEMENT_DATA[i].uniStatus == 2000) {
              this.d[8] = this.d[8] + 1;
            }
            if (this.ELEMENT_DATA[i].typeVal == 1 && this.ELEMENT_DATA[i].uniStatus == 3000) {
              this.e[8] = this.e[8] + 1;
            }
            if (this.ELEMENT_DATA[i].typeVal == 0 && this.ELEMENT_DATA[i].uniStatus == 3006) {
              this.e[8] = this.e[8] + 1;
            }

            //10
            //kole darkhast ha - حوزه‌های علمیه مورد تایید مرکز مدیریت حوزه‌های علمیه خواهران
            if (this.ELEMENT_DATA[i].typeVal == 1) {
              this.total[9] = this.total[9] + 1;
            }


            //baghie sotoon ha
            if (this.ELEMENT_DATA[i].typeVal == 1 && this.ELEMENT_DATA[i].uniStatus == 1) {
              this.a[9] = this.a[9] + 1;
            }

            if (this.ELEMENT_DATA[i].typeVal == 1 && this.ELEMENT_DATA[i].uniStatus == 1000) {
              this.b[9] = this.b[9] + 1;
            }

            if (this.ELEMENT_DATA[i].typeVal == 1 && this.ELEMENT_DATA[i].uniStatus == 1001) {
              this.c[9] = this.c[9] + 1;
            }

            if (this.ELEMENT_DATA[i].typeVal == 1 && this.ELEMENT_DATA[i].uniStatus == 2000) {
              this.d[9] = this.d[9] + 1;
            }
            if (this.ELEMENT_DATA[i].typeVal == 1 && this.ELEMENT_DATA[i].uniStatus == 3000) {
              this.e[9] = this.e[9] + 1;
            }
            if (this.ELEMENT_DATA[i].typeVal == 1 && this.ELEMENT_DATA[i].uniStatus == 3006) {
              this.e[9] = this.e[9] + 1;
            }


            //11
            //kole darkhast ha - حوزه‌های علمیه مورد تایید مرکز مدیریت حوزه‌های علمیه اصفهان
            if (this.ELEMENT_DATA[i].typeVal == 2) {
              this.total[10] = this.total[10] + 1;
            }

            //baghie sotoon ha
            if (this.ELEMENT_DATA[i].typeVal == 2 && this.ELEMENT_DATA[i].uniStatus == 1) {
              this.a[10] = this.a[10] + 1;
            }

            if (this.ELEMENT_DATA[i].typeVal == 2 && this.ELEMENT_DATA[i].uniStatus == 1000) {
              this.b[10] = this.b[10] + 1;
            }

            if (this.ELEMENT_DATA[i].typeVal == 2 && this.ELEMENT_DATA[i].uniStatus == 1001) {
              this.c[10] = this.c[10] + 1;
            }

            if (this.ELEMENT_DATA[i].typeVal == 2 && this.ELEMENT_DATA[i].uniStatus == 2000) {
              this.d[10] = this.d[10] + 1;
            }
            if (this.ELEMENT_DATA[i].typeVal == 2 && this.ELEMENT_DATA[i].uniStatus == 3006) {
              this.e[10] = this.e[10] + 1;
            }


            //12
           // kole darkhast ha - حوزه‌های علمیه مورد تایید مرکز مدیریت حوزه‌های علمیه خراسان
            if (this.ELEMENT_DATA[i].typeVal == 3) {
              this.total[11] = this.total[11] + 1;
            }

            //baghie sotoon ha
            if (this.ELEMENT_DATA[i].typeVal == 3 && this.ELEMENT_DATA[i].uniStatus == 1) {
              this.a[11] = this.a[11] + 1;
            }

            if (this.ELEMENT_DATA[i].typeVal == 3 && this.ELEMENT_DATA[i].uniStatus == 1000) {
              this.b[11] = this.b[11] + 1;
            }

            if (this.ELEMENT_DATA[i].typeVal == 3 && this.ELEMENT_DATA[i].uniStatus == 1001) {
              this.c[11] = this.c[11] + 1;
            }

            if (this.ELEMENT_DATA[i].typeVal == 3 && this.ELEMENT_DATA[i].uniStatus == 2000) {
              this.d[11] = this.d[11] + 1;
            }
            if (this.ELEMENT_DATA[i].typeVal == 3 && this.ELEMENT_DATA[i].uniStatus == 3006) {
              this.e[11] = this.e[11] + 1;
            }


            //13
            //kole darkhast ha - حوزه‌های علمیه مورد تایید مرکز مدیریت حوزه‌های علمیه اهل سنت
            if (this.ELEMENT_DATA[i].typeVal == 4) {
              this.total[12] = this.total[12] + 1;
            }

            //baghie sotoon ha
            if (this.ELEMENT_DATA[i].typeVal == 4 && this.ELEMENT_DATA[i].uniStatus == 1) {
              this.a[12] = this.a[12] + 1;
            }

            if (this.ELEMENT_DATA[i].typeVal == 4 && this.ELEMENT_DATA[i].uniStatus == 1000) {
              this.b[12] = this.b[12] + 1;
            }

            if (this.ELEMENT_DATA[i].typeVal == 4 && this.ELEMENT_DATA[i].uniStatus == 1001) {
              this.c[12] = this.c[12] + 1;
            }

            if (this.ELEMENT_DATA[i].typeVal == 4 && this.ELEMENT_DATA[i].uniStatus == 2000) {
              this.d[12] = this.d[12] + 1;
            }
            if (this.ELEMENT_DATA[i].typeVal == 4 && this.ELEMENT_DATA[i].uniStatus == 3006) {
              this.e[12] = this.e[12] + 1;
            }

          }


          //14
          //kole darkhast ha - مراکز پژوهشی مورد تایید وزارت علوم,تحقیقات و فناوری
          if (this.ELEMENT_DATA[i].uniSubCode == 2) {
            if (this.ELEMENT_DATA[i].typeVal == 0) {
              this.total[13] = this.total[13] + 1;
            }

            //baghie sotoon ha
            if (this.ELEMENT_DATA[i].typeVal == 0 && this.ELEMENT_DATA[i].uniStatus == 1) {
              this.a[13] = this.a[13] + 1;
            }

            if (this.ELEMENT_DATA[i].typeVal == 0 && this.ELEMENT_DATA[i].uniStatus == 1000) {
              this.b[13] = this.b[13] + 1;
            }

            if (this.ELEMENT_DATA[i].typeVal == 0 && this.ELEMENT_DATA[i].uniStatus == 1001) {
              this.c[13] = this.c[13] + 1;
            }

            if (this.ELEMENT_DATA[i].typeVal == 0 && this.ELEMENT_DATA[i].uniStatus == 2000) {
              this.d[13] = this.d[13] + 1;
            }
            if (this.ELEMENT_DATA[i].typeVal == 0 && this.ELEMENT_DATA[i].uniStatus == 3006) {
              this.e[13] = this.e[13] + 1;
            }

            //15
            //kole darkhast ha - مراکز پژوهشی مورد تایید وزارت بهداشت و درمان و آموزش پزشکی
            if (this.ELEMENT_DATA[i].typeVal == 1) {
              this.total[14] = this.total[14] + 1;
            }

            // //baghie sotoon ha
            if (this.ELEMENT_DATA[i].typeVal == 1 && this.ELEMENT_DATA[i].uniStatus == 1) {
              this.a[14] = this.a[14] + 1;
            }

            if (this.ELEMENT_DATA[i].typeVal == 1 && this.ELEMENT_DATA[i].uniStatus == 1000) {
              this.b[14] = this.b[14] + 1;
            }

            if (this.ELEMENT_DATA[i].typeVal == 1 && this.ELEMENT_DATA[i].uniStatus == 1001) {
              this.c[14] = this.c[14] + 1;
            }

            if (this.ELEMENT_DATA[i].typeVal == 1 && this.ELEMENT_DATA[i].uniStatus == 2000) {
              this.d[14] = this.d[14] + 1;
            }
            if (this.ELEMENT_DATA[i].typeVal == 1 && this.ELEMENT_DATA[i].uniStatus == 3006) {
              this.e[14] = this.e[14] + 1;
            }


            //16
            //kole darkhast ha - مراکز پژوهشی مورد تایید مرکز مدیریت حوزه های علمیه
            if (this.ELEMENT_DATA[i].typeVal == 2) {
              this.total[15] = this.total[15] + 1;
            }

            //baghie sotoon ha
            if (this.ELEMENT_DATA[i].typeVal == 2 && this.ELEMENT_DATA[i].uniStatus == 1) {
              this.a[15] = this.a[15] + 1;
            }

            if (this.ELEMENT_DATA[i].typeVal == 2 && this.ELEMENT_DATA[i].uniStatus == 1000) {
              this.b[15] = this.b[15] + 1;
            }

            if (this.ELEMENT_DATA[i].typeVal == 2 && this.ELEMENT_DATA[i].uniStatus == 1001) {
              this.c[15] = this.c[15] + 1;
            }

            if (this.ELEMENT_DATA[i].typeVal == 2 && this.ELEMENT_DATA[i].uniStatus == 2000) {
              this.d[15] = this.d[15] + 1;
            }
            if (this.ELEMENT_DATA[i].typeVal == 2 && this.ELEMENT_DATA[i].uniStatus == 3006) {
              this.e[15] = this.e[15] + 1;
            }
          }




          if (this.ELEMENT_DATA[i].uniSubCode == 3) {
           //16
            //kole darkhast ha - مراکز پژوهشی مورد تایید مرکز مدیریت حوزه های علمیه
            if (this.ELEMENT_DATA[i].typeVal == 0) {
              this.total[16] = this.total[16] + 1;
            }

            //baghie sotoon ha
            if (this.ELEMENT_DATA[i].typeVal == 0 && this.ELEMENT_DATA[i].uniStatus == 1) {
              this.a[16] = this.a[16] + 1;
            }

            if (this.ELEMENT_DATA[i].typeVal == 0 && this.ELEMENT_DATA[i].uniStatus == 1000) {
              this.b[16] = this.b[16] + 1;
            }

            if (this.ELEMENT_DATA[i].typeVal == 0 && this.ELEMENT_DATA[i].uniStatus == 1001) {
              this.c[16] = this.c[16] + 1;
            }

            if (this.ELEMENT_DATA[i].typeVal == 0 && this.ELEMENT_DATA[i].uniStatus == 2000) {
              this.d[16] = this.d[16] + 1;
            }
            if (this.ELEMENT_DATA[i].typeVal == 0 && this.ELEMENT_DATA[i].uniStatus == 3006) {
              this.e[16] = this.e[16] + 1;
            }


            if (this.ELEMENT_DATA[i].typeVal == 0) {
              this.total[16] = this.total[16] + 1;
            }

            //baghie sotoon ha
            if (this.ELEMENT_DATA[i].typeVal == 1 && this.ELEMENT_DATA[i].uniStatus == 1) {
              this.a[17] = this.a[17] + 1;
            }

            if (this.ELEMENT_DATA[i].typeVal == 1 && this.ELEMENT_DATA[i].uniStatus == 1000) {
              this.b[17] = this.b[17] + 1;
            }

            if (this.ELEMENT_DATA[i].typeVal == 1 && this.ELEMENT_DATA[i].uniStatus == 1001) {
              this.c[17] = this.c[17] + 1;
            }

            if (this.ELEMENT_DATA[i].typeVal == 1 && this.ELEMENT_DATA[i].uniStatus == 2000) {
              this.d[17] = this.d[17] + 1;
            }
            if (this.ELEMENT_DATA[i].typeVal == 1 && this.ELEMENT_DATA[i].uniStatus == 3006) {
              this.e[17] = this.e[17] + 1;
            }
          }

          }




        for (let j = 0; j < 8; j++) {

          this.sum[0] = this.sum[0] + this.total[j];
        }

        for (let j = 8; j < 13; j++) {

          this.sum[1] = this.sum[1] + this.total[j];
        }

        for (let j = 13; j < 16; j++) {

          this.sum[2] = this.sum[2] + this.total[j];
        }

        for (let j = 16; j < 18; j++) {

          this.sum[3] = this.sum[3] + this.total[j];
        }


        this.totalsum = this.sum[0] + this.sum[1] + this.sum[2]+ this.sum[3];
        res = this.sum;
      });

    return this.ELEMENT_DATA;

  }

}

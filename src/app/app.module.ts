
// کتابخانه هایی که در انگولار نصب هستند
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

// کتابخانه هایی که باید دانلود و نصب شوند
import { CountUpModule } from 'countup.js-angular2';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxWebstorageModule } from 'ngx-webstorage';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faBell, faCoffee, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';


// کامپوننت ها و سرویس های خودمان
import { AccessCodeModalComponent } from './views/owners/access-code-modal/access-code-modal.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthService } from './services/auth/auth.service';
import { CustMainComponent } from './views/customer/main/main.component';
import { CreatNewTicketComponent } from './views/customer/create-new-ticket/create-new-ticket.component';
import { DevMainComponent } from './views/developer/main/main.component';
import { OwnersMainComponent } from './views/owners/main/main.component';
import { LoginPageComponent } from './views/public/login-page/login-page.component';
import { ShowUserTicketComponent } from './views/customer/Show-User-Ticket/Show-User-Ticket';
import { ShowUniReportComponent } from './views/inspectors/show-uni-report/show-uni-report.component';

import { MaterialModule } from './matrial-module'; // این ماژول مخصوص کار با کتابخانه های متریال است


// نوید
import { AuthInterceptor } from 'src//auth/auth.interceptor';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { UserPanelComponent } from './views/public/user-panel/user-panel.component';


// رضا
import { AddPersonComponent } from './views/owners/manage-person/add-person.component';
import { InspeectorComponent } from './views/inspectors/main/main.component';
import { ChangePasswordComponent } from './views/public/change-password/change-password.component';
import { AccessCodeComponent } from './views/owners/acsesscode/access-code.component';

// سعید
import { TicketingService } from './services/Ticketing/Ticketing.service';
import { ChatTicketComponent } from './views/customer/Chat-Ticket/ChatTicket.component';
import { ShowTicketsComponent } from './views/owners/Ticketing/show-tickets/show-tickets.component';
import { TablesComponent } from './views/public/tables/tables.component';

import { getFarsiPaginatorIntl } from './farsi-paginator-intl';
import { MatPaginatorIntl } from '@angular/material';
import { AddDeveloperComponent } from './views/developer/add-developer/add-developer.component';
import { ModalComponent } from './views/public/modal/modal.component';
import { LandingPageComponent } from './views/public/landing-page/landing-page.component';
import { ManageUniStatusComponent } from './views/owners/manage-uni-status/manage-uni-status.component';
import { UniStatusLogModalComponent } from './views/owners/uni-status-log-modal/uni-status-log-modal.component';
import { UniReportsComponent } from './views/owners/uni-reports/uni-reports.component';
import { UniReportsInfoModalComponent } from './views/owners/uni-reports-info-modal/uni-reports-info-modal.component';
import { AddUniPreDataComponent } from './views/owners/add-uni-pre-data/add-uni-pre-data.component';
import { EcCustomersService } from './services/owners/ec-customers.service';
import { TicketForDeveloperComponent } from './views/owners/ticket-for-developer/ticket-for-developer.component';
import { ShowTicketForOwnersManagerComponent } from './views/owners/ticket-for-developer/show-ticket-for-owners-manager/show-ticket-for-owners-manager.component';
import { ChatTicketForDeveloperComponent } from './views/owners/ticket-for-developer/chat-ticket-for-developer/chat-ticket-for-developer.component';
import { ShowTicketForDeveloperComponent } from './views/developer/show-ticket-for-developer/show-ticket-for-developer.component';
import { UniDeleteComponent } from './views/owners/uni-delete/uni-delete.component';
import { DeleteUniService } from './services/owners/delete-uni.service';
import { UniServiceRequstComponent } from './views/owners/uni-service-requst/uni-service-requst.component';
import { UploadComponent } from './views/owners/manage-uni-status/upload/upload.component';
import { ServiceFileUploadComponent } from './views/owners/uni-service-requst/service-file-upload/service-file-upload.component';
import { ReportSubsComponent } from './views/owners/report-subs/report-subs.component';
import { StaffListComponent } from './views/owners/staff-list/staff-list.component';
import { EditStaffComponent } from './views/owners/edit-staff/edit-staff.component';
import { EditPersonComponent } from './views/owners/manage-person/edit-person/edit-person.component';




@NgModule({
  declarations: [
    AppComponent,
    AddPersonComponent,
    LoginPageComponent,
    CreatNewTicketComponent,
    DevMainComponent,
    OwnersMainComponent,
    CustMainComponent,
    UserPanelComponent,
    CreatNewTicketComponent,
    ShowUserTicketComponent,
    ChatTicketComponent,
    ShowTicketsComponent,
    InspeectorComponent,
    TablesComponent,
    AddDeveloperComponent,
    ModalComponent,
    ShowUniReportComponent,
    ChangePasswordComponent,
    AccessCodeComponent,
    AccessCodeModalComponent,
    LandingPageComponent,
    ManageUniStatusComponent,
    UniStatusLogModalComponent,
    UniReportsComponent,
    UniReportsInfoModalComponent,
    AddUniPreDataComponent,
    TicketForDeveloperComponent,
    ShowTicketForOwnersManagerComponent,
    ChatTicketForDeveloperComponent,
    ShowTicketForDeveloperComponent,
    UniDeleteComponent,
    UniServiceRequstComponent,
    UploadComponent,
    ServiceFileUploadComponent,
    ReportSubsComponent,
    StaffListComponent,
    EditStaffComponent,
    EditPersonComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CountUpModule,
    HttpClientModule,
    MaterialModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    NgxWebstorageModule.forRoot(),
    NgbModule,
    ToastrModule.forRoot({
      progressBar: true
    })
  ],

  entryComponents: [
    ModalComponent,
    AccessCodeModalComponent,
    UniStatusLogModalComponent,
    UniReportsInfoModalComponent,
    UniDeleteComponent,
    EditStaffComponent
  ],

  providers: [AuthService,
    TicketingService,
    DeleteUniService,
    EcCustomersService, {
    // توسط نوید برای لاگین ثبت شده اند
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
    // پایان لاگین نوید
  },
  { provide: MatPaginatorIntl, useValue: getFarsiPaginatorIntl() }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    // Add an icon to the library for convenient access in other components
    library.addIcons(faBell, faCoffee, faSignOutAlt);
  }
}

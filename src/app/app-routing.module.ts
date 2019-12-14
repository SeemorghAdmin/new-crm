import { AddUniPreDataComponent } from './views/owners/add-uni-pre-data/add-uni-pre-data.component';
import { ShowUniReportComponent } from './views/inspectors/show-uni-report/show-uni-report.component';
import { AddDeveloperComponent } from './views/developer/add-developer/add-developer.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginPageComponent } from './views/public/login-page/login-page.component';
import { CustMainComponent } from './views/customer/main/main.component';
import { DevMainComponent } from './views/developer/main/main.component';
import { UserPanelComponent } from './views/public/user-panel/user-panel.component';
import { CreatNewTicketComponent } from './views/customer/create-new-ticket/create-new-ticket.component';
import { ShowUserTicketComponent } from './views/customer/Show-User-Ticket/Show-User-Ticket';
import { ChatTicketComponent } from './views/customer/Chat-Ticket/ChatTicket.component';
import { ShowTicketsComponent } from './views/owners/Ticketing/show-tickets/show-tickets.component';

// رضا
import { AddPersonComponent } from './views/owners/manage-person/add-person.component';
import { InspeectorComponent } from './views/inspectors/main/main.component';
import { OwnersMainComponent } from './views/owners/main/main.component';
import { TablesComponent } from './views/public/tables/tables.component';
import { ChangePasswordComponent } from './views/public/change-password/change-password.component';
import { AccessCodeComponent } from './views/owners/acsesscode/access-code.component';
import { LandingPageComponent } from './views/public/landing-page/landing-page.component';
import { ManageUniStatusComponent } from './views/owners/manage-uni-status/manage-uni-status.component';
import { UniReportsComponent } from './views/owners/uni-reports/uni-reports.component';
import { TicketForDeveloperComponent } from './views/owners/ticket-for-developer/ticket-for-developer.component';
import { ShowTicketForOwnersManagerComponent } from './views/owners/ticket-for-developer/show-ticket-for-owners-manager/show-ticket-for-owners-manager.component';
import { ChatTicketForDeveloperComponent } from './views/owners/ticket-for-developer/chat-ticket-for-developer/chat-ticket-for-developer.component';
import { ShowTicketForDeveloperComponent } from './views/developer/show-ticket-for-developer/show-ticket-for-developer.component';
import { UniServiceRequstComponent } from './views/owners/uni-service-requst/uni-service-requst.component';
import { ServiceFileUploadComponent } from './views/owners/uni-service-requst/service-file-upload/service-file-upload.component';

const routes: Routes = [
  
  {path: '', component: LoginPageComponent},
  {path: 'landing-page', component: LandingPageComponent},
  {path: 'table', component: TablesComponent},
  {path: 'panel', component: UserPanelComponent,},
  {path: 'ChatTicket/:id', component:ChatTicketComponent},
  {path: 'cust/home', component: CustMainComponent},
  {path: 'cust/home', component: CustMainComponent,
  children:
  [
    {path: 'cust-creat-new-Ticket', component:CreatNewTicketComponent},
    {path: 'cust-Show-User-Ticket', component:ShowUserTicketComponent},
    {path: 'ChatTicket/:id', component:ChatTicketComponent},
  ]
  },
  {path: 'dev/home', component: DevMainComponent},
  {path: 'dev/home', component: DevMainComponent,
  children:
  [
    {path: 'AddShoaManager', component: AddPersonComponent},
    {path: 'AddDeveloper', component: AddDeveloperComponent},
    {path: 'app-show-ticket-for-developer', component: ShowTicketForDeveloperComponent},
    {path: 'app-chat-ticket-for-developer/:id', component:ChatTicketForDeveloperComponent},
  ]
  },
  {path: 'owner/home', component: OwnersMainComponent},
  {path: 'owner/home', component: OwnersMainComponent,
children:
[
  {path: 'app-manage-uni-status', component: ManageUniStatusComponent},
  {path: 'uni-reports/:id', component: UniReportsComponent},
  {path: 'AddPerson', component: AddPersonComponent},
  {path: 'ChatTicket/:id', component:ChatTicketComponent},
  {path: 'app-chat-ticket-for-developer/:id', component:ChatTicketForDeveloperComponent},
  {path: 'access-code', component: AccessCodeComponent},
  {path: 'ShowTickets', component:ShowTicketsComponent},
  {path: 'app-ticket-for-developer', component:TicketForDeveloperComponent},
  {path: 'app-show-ticket-for-owners-manager', component:ShowTicketForOwnersManagerComponent},
  {path: 'uni-services', component: UniServiceRequstComponent},
  {path: 'app-service-file-upload/:id', component: ServiceFileUploadComponent}, 
  
]

},
  {path: 'inspeector/home', component: InspeectorComponent},
  {path: 'inspeector/home', component: InspeectorComponent,
  children:
  [
    {path: 'ShowUniReport', component: ShowUniReportComponent},
  ]
},
  {path: 'user-panel', component: UserPanelComponent},
  // صفحه ثبت کردن person

  {path: 'change-password/:id' , component: ChangePasswordComponent},

  {path: 'ShowUniReport', component: ShowUniReportComponent},
  {path: 'add-uni-pre-data', component: AddUniPreDataComponent},
  {path:'report-subs', component:ReportSubsComponent },

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

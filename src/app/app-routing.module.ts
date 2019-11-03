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

const routes: Routes = [
  {path: '', component: LoginPageComponent},
  {path: 'table', component: TablesComponent},
  {path: 'panel', component: UserPanelComponent,},
  {path: 'cust/home', component: CustMainComponent},
  {path: 'cust/home', component: CustMainComponent, 
  children: 
  [
    {path: 'cust-creat-new-Ticket', component:CreatNewTicketComponent},
    {path: 'cust-Show-User-Ticket', component:ShowUserTicketComponent},
  ]
  },
  {path: 'dev/home', component: DevMainComponent},
  {path: 'dev/home', component: DevMainComponent,
  children:
  [
    {path: 'addperson', component: AddPersonComponent},
  ]
  },
  {path: 'owner/home', component: OwnersMainComponent},
  {path: 'inspeector/home', component: InspeectorComponent},
  {path: 'user-panel', component: UserPanelComponent},
  // صفحه ثبت کردن person
  {path: 'addperson', component: AddPersonComponent},
  
  
  {path: 'ChatTicket', component:ChatTicketComponent},
  {path: 'ChatTicket/:id', component:ChatTicketComponent},
  {path: 'ShowTicketsComponent', component:ShowTicketsComponent},
  {path: 'AddDeveloperComponent', component:AddDeveloperComponent},

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

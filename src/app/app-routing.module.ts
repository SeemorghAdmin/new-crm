import { NgModule } from '@angular/core';
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
// صفحه اضافه ثبت person
import { AddPersonComponent } from './views/owners/manage-person/add-person.component';
import { OwnersMainComponent } from './views/owners/main/main.component';

const routes: Routes = [
  { path: '', component: LoginPageComponent },
  { path: 'cust/home', component: CustMainComponent },
  { path: 'dev/home/:id', component: DevMainComponent },
  // صفحه ثبت کردن person
  // {path: 'addperson', component: AddPersonComponent},
  {path: 'cust-creat-new-Ticket', component:CreatNewTicketComponent},
  {path: 'cust-Show-User-Ticket', component:ShowUserTicketComponent},
  {path: 'ChatTicket', component:ChatTicketComponent},
  {path: 'ChatTicket/:id', component:ChatTicketComponent},
  {path: 'ShowTicketsComponent', component:ShowTicketsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

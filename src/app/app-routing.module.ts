import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginPageComponent } from './views/public/login-page/login-page.component';
import { CustMainComponent } from './views/customer/main/main.component';
import { DevMainComponent } from './views/developer/main/main.component';
import { UserPanelComponent } from './views/public/user-panel/user-panel.component';

// رضا
// صفحه اضافه ثبت person
import { AddPersonComponent } from './views/owners/manage-person/add-person.component';

const routes: Routes = [
  {path: '', component: DevMainComponent},
  {path: 'cust/home', component: CustMainComponent},
  // صفحه ثبت کردن person
  // {path: 'addperson', component: AddPersonComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

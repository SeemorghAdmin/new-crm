import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginPageComponent } from './views/public/login-page/login-page.component';
import { CustMainComponent } from './views/customer/main/main.component';


const routes: Routes = [
  {path: '', component: LoginPageComponent},
  {path: 'cust/home', component: CustMainComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

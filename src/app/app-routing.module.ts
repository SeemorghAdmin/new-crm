import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginPageComponent } from './views/public/login-page/login-page.component';
import { CustMainComponent } from './views/customer/main/main.component';
import { DevMainComponent } from './views/developer/main/main.component';


const routes: Routes = [
  { path: '', component: LoginPageComponent },
  { path: 'cust/home', component: CustMainComponent },
  { path: 'dev/home/:id', component: DevMainComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

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
import { HttpClient} from '@angular/common/http';


// کتابخانه های متریال برای side-nav
import {MatExpansionModule} from '@angular/material/expansion';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';


// کامپوننت ها و سرویس های خودمان
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './views/public/login-page/login-page.component';
import { CreatNewTicketComponent } from './views/customer/creat-new-ticket/creat-new-ticket.component';
import { DevMainComponent } from './views/developer/main/main.component';
import { OwnersMainComponent } from './views/owners/main/main.component';
import { CustMainComponent } from './views/customer/main/main.component';
import { AuthService } from './services/auth/auth.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    CreatNewTicketComponent,
    DevMainComponent,
    OwnersMainComponent,
    CustMainComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CountUpModule,
    HttpClientModule,
    MatSidenavModule,
    MatIconModule,
    MatExpansionModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    NgxWebstorageModule.forRoot(),
   
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }

// کتابخانه هایی که در انگولار نصب هستند
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

// کتابخانه هایی که باید دانلود و نصب شوند
import { CountUpModule } from 'countup.js-angular2';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';


// کتابخانه های متریال برای side-nav
import {MatExpansionModule} from '@angular/material/expansion';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';


// کامپوننت ها و سرویس های خودمان
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './views/public/login-page/login-page.component';
import { MainComponent } from './views/developer/main/main.component';
import { CreatNewTicketComponent } from './views/customer/creat-new-ticket/creat-new-ticket.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    MainComponent,
    CreatNewTicketComponent
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

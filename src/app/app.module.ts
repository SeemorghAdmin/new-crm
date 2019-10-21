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
import { CreatNewTicketComponent } from './views/customer/creat-new-ticket/creat-new-ticket.component';
import { DevMainComponent } from './views/developer/main/main.component';
import { OwnersMainComponent } from './views/owners/main/main.component';
import { CustMainComponent } from './views/customer/main/main.component';


// نوید
import { AuthInterceptor } from 'src//auth/auth.interceptor';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { AuthService } from './services/auth/auth.service';

// رضا
import { AddPersonComponent } from './views/owners/manageperson/addperson.component';


@NgModule({
  declarations: [
    AppComponent, AddPersonComponent,
    LoginPageComponent,
    CreatNewTicketComponent,
    DevMainComponent,
    OwnersMainComponent,
    CustMainComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CountUpModule,
    HttpClientModule,
    MatSidenavModule,
    MatIconModule,
    NgbModule,
    MatExpansionModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    ToastrModule.forRoot({
      progressBar: true
    })
  ],
  providers: [AuthService, {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

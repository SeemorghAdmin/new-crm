// کتابخانه هایی که در انگولار نصب هستند
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

// کتابخانه هایی که باید دانلود و نصب شوند
import { CountUpModule } from 'countup.js-angular2';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faBell, faCoffee, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';


// کامپوننت ها و سرویس های خودمان
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './views/public/login-page/login-page.component';
import { CreatNewTicketComponent } from './views/customer/create-new-ticket/create-new-ticket.component';
import { DevMainComponent } from './views/developer/main/main.component';
import { OwnersMainComponent } from './views/owners/main/main.component';
import { CustMainComponent } from './views/customer/main/main.component';
import { ShowUserTicketComponent } from './views/customer/Show-User-Ticket/Show-User-Ticket';

import { MaterialModule } from './matrial-module'; // این ماژول مخصوص کار با کتابخانه های متریال است


// نوید
import { AuthInterceptor } from 'src//auth/auth.interceptor';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { AuthService } from './services/auth/auth.service';
import { UserPanelComponent } from './views/public/user-panel/user-panel.component';


// رضا
import { AddPersonComponent } from './views/owners/manage-person/add-person.component';

import { TicketingService } from './services/Ticketing/Ticketing.service'
import { ChatTicketComponent } from './views/customer/Chat-Ticket/ChatTicket.component';
import { ShowTicketsComponent } from './views/owners/Ticketing/show-tickets/show-tickets.component';

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
    ShowTicketsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CountUpModule,
    HttpClientModule,
    MaterialModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    NgbModule,
    ToastrModule.forRoot({
      progressBar: true
    })
  ],
    
  providers: [AuthService,TicketingService, {
    // توسط نوید برای لاگین ثبت شده اند
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
    // پایان لاگین نوید
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    // Add an icon to the library for convenient access in other components
    library.addIcons(faBell, faCoffee, faSignOutAlt);
  }
}

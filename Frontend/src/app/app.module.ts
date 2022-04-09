import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {AppRoutingModule} from './app-routing.module';
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import { WelcomeComponent } from './welcome/welcome.component';
import { DoctorComponent } from './doctor/doctor.component';
import { SpecialistComponent } from './specialist/specialist.component';
import { ViewDoctorComponent } from './view-doctor/view-doctor.component';
import { ViewSpecialistComponent } from './view-specialist/view-specialist.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { MenuComponent } from './menu/menu.component';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    WelcomeComponent,
    DoctorComponent,
    SpecialistComponent,
    ViewDoctorComponent,
    ViewSpecialistComponent,
    MenuComponent,
    LogoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

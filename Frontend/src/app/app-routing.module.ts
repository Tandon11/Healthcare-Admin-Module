import { NgModule } from '@angular/core';
import {LoginComponent} from "./login/login.component";
import { Routes, RouterModule} from "@angular/router";
import {WelcomeComponent} from "./welcome/welcome.component";
import {DoctorComponent} from "./doctor/doctor.component";
import {SpecialistComponent} from "./specialist/specialist.component";
import {ViewDoctorComponent} from "./view-doctor/view-doctor.component";
import {ViewSpecialistComponent} from "./view-specialist/view-specialist.component";
import {RouteGaurdService} from "./services/route-gaurd.service";

// Only Activate if user logged in as it returns true and accepts array of parameters in form of other routeGaurds
// accepts pararmeter carried from login to welcome, remaining modification is done at welcome.component.ts by adding dependency

const routes: Routes = [
  {path : '', component : LoginComponent}, // default path
  {path : 'login', component : LoginComponent, canActivate: [RouteGaurdService]},
  {path : 'welcome/:name', component : WelcomeComponent, canActivate: [RouteGaurdService]},
  {path : 'doctor', component : DoctorComponent, canActivate: [RouteGaurdService]},
  {path : 'specialist', component : SpecialistComponent, canActivate: [RouteGaurdService]},
  {path : 'viewDoctor', component : ViewDoctorComponent, canActivate: [RouteGaurdService]},
  {path : 'viewSpecialist', component : ViewSpecialistComponent, canActivate: [RouteGaurdService]},
  {path : 'logout', component: LoginComponent, canActivate: [RouteGaurdService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

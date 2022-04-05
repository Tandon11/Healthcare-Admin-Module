import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginComponent} from "./login/login.component";
import { Routes, RouterModule} from "@angular/router";
import {WelcomeComponent} from "./welcome/welcome.component";
import {DoctorComponent} from "./doctor/doctor.component";
import {SpecialistComponent} from "./specialist/specialist.component";
import {ViewDoctorComponent} from "./view-doctor/view-doctor.component";
import {ViewSpecialistComponent} from "./view-specialist/view-specialist.component";

const routes: Routes = [
  {path : '', component : LoginComponent}, // default path
  {path : 'login', component : LoginComponent},
  {path : 'welcome/:name', component : WelcomeComponent},
  {path : 'doctor', component : DoctorComponent},
  {path : 'specialist', component : SpecialistComponent},
  {path : 'viewDoctor', component : ViewDoctorComponent},
  {path : 'viewSpecialist', component : ViewSpecialistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

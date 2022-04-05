import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginComponent} from "./login/login.component";
import { Routes, RouterModule} from "@angular/router";
import {WelcomeComponent} from "./welcome/welcome.component";
import {DoctorComponent} from "./doctor/doctor.component";
import {SpecialistComponent} from "./specialist/specialist.component";
import {ViewProfessionalsComponent} from "./view-professionals/view-professionals.component";

const routes: Routes = [
  {path : '', component : LoginComponent}, // default path
  {path : 'login', component : LoginComponent},
  {path : 'welcome/:name', component : WelcomeComponent},
  {path : 'doctor', component : DoctorComponent},
  {path : 'specialist', component : SpecialistComponent},
  {path : 'viewProfessionals', component : ViewProfessionalsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {DataService} from "../services/data.service";
import {ViewProfessionalsComponent} from "../view-professionals/view-professionals.component";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(
    private router: Router,
    private dataService: DataService,
  ) { }

  ngOnInit(): void {
  }

  addDoctor() {
      this.router.navigate(['doctor']);
  }

  addSpecialist() {
      this.router.navigate(['specialist']);
  }

  viewProfessionals() {
      this.router.navigate(['viewProfessionals']);
  }
}

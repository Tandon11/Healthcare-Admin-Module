import { Component, OnInit } from '@angular/core';
import {DataService} from "../services/data.service";

@Component({
  selector: 'app-specialist',
  templateUrl: './specialist.component.html',
  styleUrls: ['./specialist.component.css']
})
export class SpecialistComponent implements OnInit {

  constructor(private dataService :DataService) { }

  Specialist = {
      fname: "",
      lname: "",
      username: "",
      password: "",
      gender: "",
      highest_qual: "",
      contact_no: "",
      is_Avail: "",
  };

  ngOnInit(): void {
  }

  submitDetails() {
      this.dataService.saveSpecialist(this.Specialist);
  }
}

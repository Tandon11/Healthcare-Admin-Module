import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

  Doctor = {
    fname: "",
    lname: "",
    username: "",
    password: "",
    gender: "",
    highest_qual: "",
    contact_no: "",
    is_Avail: "",
  }

  submitDetails() {
      this.dataService.saveDoctor(this.Doctor)
  }

}

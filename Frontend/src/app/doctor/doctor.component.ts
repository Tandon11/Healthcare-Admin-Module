import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import {Router} from "@angular/router";
import {HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {

  constructor(private dataService: DataService,
              private router: Router) { }

  ngOnInit(): void {
  }

  display = "none";

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
      this.dataService.checkDoctor(this.Doctor).subscribe(
      (response:any)=>{
        console.log("Hello" + response);
        if(!response.username) {
          console.log("inside if")
          this.dataService.saveDoctor(this.Doctor).subscribe(data=>{
              console.log("Data Sent");
              console.log(data);
            },
            error => {
              console.log("inside error")
              console.log(error);
            });
          this.router.navigate(['welcome/Abhishek']);
        }

        else {
          console.log("Username Already Exists");
          this.openModal();
        }
      }
    );

  }

  genderAssign() {
    // @ts-ignore
    this.Doctor.gender = document.querySelector('input[name = "gender"]:checked').value;
  }

  availAssign() {
    // @ts-ignore
    this.Doctor.is_Avail = document.querySelector('input[name = "avail"]:checked').value;
  }

  assignQualification() {
    // @ts-ignore
    var e = document.getElementById("dropdown");
    // @ts-ignore
    this.Doctor.highest_qual= e.options[e.selectedIndex].text;
  }

  openModal() {
    this.display = "block";
  }

  onCloseHandled() {
    this.display = "none";
  }

  okayConfirmation() {
    this.display = "none";
    this.router.navigate(['welcome/Abhishek']);
  }
}

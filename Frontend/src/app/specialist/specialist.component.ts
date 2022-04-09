import { Component, OnInit } from '@angular/core';
import {DataService} from "../services/data.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-specialist',
  templateUrl: './specialist.component.html',
  styleUrls: ['./specialist.component.css']
})
export class SpecialistComponent implements OnInit {

  display = "none";

  constructor(private dataService: DataService,
              private router: Router) {
  }

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
    this.dataService.checkSpecialist(this.Specialist).subscribe(
    (response:any)=>{
      console.log("Hello" + response);

      if(!response.username) {
        console.log("inside if")
        this.dataService.saveSpecialist(this.Specialist).subscribe(data=>{
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
    this.Specialist.gender = document.querySelector('input[name = "gender"]:checked').value;
  }

  availAssign() {
    // @ts-ignore
    this.Specialist.is_Avail = document.querySelector('input[name = "avail"]:checked').value;
  }

  assignQualification() {
    // @ts-ignore
    var e = document.getElementById("dropdown");
    // @ts-ignore
    this.Specialist.highest_qual = e.options[e.selectedIndex].text;
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

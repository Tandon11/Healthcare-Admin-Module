import { Component, OnInit } from '@angular/core';
import {DataService} from "../services/data.service";

export class Doctor {
  constructor(
    public id: number,
    public fname: string,
    public lname: string,
    public username: string,
    public password: string,
    public gender: string,
    public highest_qual: string,
    public contact_no: string,
    public is_Avail: string,
  ) {

  }
}

@Component({
  selector: 'app-view-doctor',
  templateUrl: './view-doctor.component.html',
  styleUrls: ['./view-doctor.component.css']
})
export class ViewDoctorComponent implements OnInit {

  doctor: Doctor[] | undefined;
  docId: any = [ ];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.retrieveDoctors().subscribe(
      response=> {
        this.doctor = response;
      });
  }

  submitResponses() {
    console.log(this.docId);
    this.dataService.deleteDoctors(this.docId);
  }

  pushDocId(doctorId : any){
    console.log(doctorId);
    this.docId.push(doctorId);
  }

  onCheckBoxClick(event: any, doctorId: any) {
    if(event.checked) {
      this.docId.push(doctorId);
    } else {
      let index = this.docId.indexOf(doctorId);
      if (index > -1) {
        this.docId.splice(index, 1);
      }
    }
    console.log(doctorId)
  }

}

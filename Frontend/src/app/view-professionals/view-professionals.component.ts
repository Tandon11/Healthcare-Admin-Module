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
  selector: 'app-view-professionals',
  templateUrl: './view-professionals.component.html',
  styleUrls: ['./view-professionals.component.css']
})
export class ViewProfessionalsComponent implements OnInit {

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

  //  getDoctorDetails() {
  //     this.dataService.retrieveDoctors().subscribe(
  //       response=> {
  //         this.doctor = response;
  //       }
  //     );
  // }

}

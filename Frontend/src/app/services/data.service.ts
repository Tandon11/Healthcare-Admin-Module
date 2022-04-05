import {Injectable, NgModule} from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {Specialist} from "../view-specialist/view-specialist.component";
import {Doctor} from "../view-doctor/view-doctor.component";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  saveDoctor(Doctor :any) {
    // Without subscribe() data won't be saved in database
    this.http.post('http://localhost:8090/api/doctor',Doctor).subscribe(data=>{
      console.log("Hello");
      console.log(data);
    },
      error => {
        console.log(error);
      });
  }

  saveSpecialist(Specialist :any) {
    this.http.post('http://localhost:8090/api/specialist',Specialist).subscribe(data=>{
        console.log(data);
      },
      error => {
        console.log(error);
      });
  }

  deleteDoctors(docId: any) {
    console.log(docId);
    this.http.post('http://localhost:8090/api/deleteDoctor', docId).subscribe(data=>{

      console.log(data);
      },
      error => {
        console.log(error);
      });
  }

  deleteSpecialists(specId: any) {
    console.log(specId);
    this.http.post('http://localhost:8090/api/deleteSpecialist', specId).subscribe(data=>{

        console.log(data);
      },
      error => {
        console.log(error);
      });
  }

  retrieveDoctors() {
    return this.http.get<Doctor[]>(`http://localhost:8090/api/viewDoctor`);
  }

  retrieveSpecialists() {
    return this.http.get<Specialist[]>(`http://localhost:8090/api/viewSpecialist`);
  }
}

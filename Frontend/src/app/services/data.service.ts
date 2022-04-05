import {Injectable, NgModule} from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {Doctor} from "../view-professionals/view-professionals.component";

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

  retrieveDoctors() {
    return this.http.get<Doctor[]>(`http://localhost:8090/api/viewProfessional`);
  }
}

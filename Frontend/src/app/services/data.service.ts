import {Injectable, NgModule} from '@angular/core';
import {HttpClient, HttpClientModule, HttpHeaders} from "@angular/common/http";
import {Specialist} from "../view-specialist/view-specialist.component";
import {Doctor} from "../view-doctor/view-doctor.component";
import {Credential} from "../login/login.component";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  checkDoctor(Doctor:any){
    let headers = new HttpHeaders();
    headers = headers.set('username', Doctor.username);
    return this.http.get<String>('http://localhost:8090/api/checkDoctorUsername', { headers: headers })
  }

  saveDoctor(Doctor:any){
    return this.http.post('http://localhost:8090/api/doctor',Doctor)
  }

  checkSpecialist(Specialist: any) {
    let headers = new HttpHeaders();
    headers = headers.set('username', Specialist.username);
    return this.http.get<String>('http://localhost:8090/api/checkSpecialistUsername', { headers: headers })
  }

  saveSpecialist(Specialist :any) {
   return this.http.post('http://localhost:8090/api/specialist',Specialist);
  }

  deleteDoctors(docId: any) {
    console.log(docId);
    return this.http.post('http://localhost:8090/api/deleteDoctor', docId);
  }

  deleteSpecialists(specId: any) {
    console.log(specId);
    return this.http.post('http://localhost:8090/api/deleteSpecialist', specId);
  }

  retrieveDoctors() {
    return this.http.get<Doctor[]>(`http://localhost:8090/api/viewDoctor`);
  }

  retrieveSpecialists() {
    return this.http.get<Specialist[]>(`http://localhost:8090/api/viewSpecialist`);
  }

  authenticate() {
    return this.http.get<Credential>('http://localhost:8090/api/authenticateLogin');
  }

  isUserLoggedIn() {
    const user = sessionStorage.getItem('authenticatedUser');
    return !(user === null);
  }

  logout() {
    sessionStorage.removeItem('authenticatedUser');
  }

}

import { Component, OnInit } from '@angular/core';
import {DataService} from "../services/data.service";
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";

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
      display = "none";

      constructor(private dataService: DataService) { }

      ngOnInit(): void {
        this.dataService.retrieveDoctors().subscribe(
          response=> {
            this.doctor = response;
          });
      }

      openModal() {
        this.display = "block";
      }
      onCloseHandled() {
        this.display = "none";
      }

      submitResponses() {
        console.log(this.docId);
        this.display = "none";
        this.dataService.deleteDoctors(this.docId).subscribe(
          response=>{
            console.log(response);
            window.location.reload();
          },
          error => {
            console.log(error);
          }
        );
      }

      // Pushes Doctor id upon checking and removes it upon unchecking
      onCheckBoxClick(event: any, doctorId: any) {
        if(event.target.checked) {
          this.docId.push(doctorId);
        } else {
          let index = this.docId.indexOf(doctorId);
          if (index > -1) {
            this.docId.splice(index, 1);
          }
        }
        console.log(this.docId);
      }

}

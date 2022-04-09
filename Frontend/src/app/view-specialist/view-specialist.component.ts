import { Component, OnInit } from '@angular/core';
import {DataService} from "../services/data.service";
import {Doctor} from "../view-doctor/view-doctor.component";

export class Specialist {
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
  selector: 'app-view-specialist',
  templateUrl: './view-specialist.component.html',
  styleUrls: ['./view-specialist.component.css']
})
export class ViewSpecialistComponent implements OnInit {

  specialist: Specialist[] | undefined;
  specId: any = [ ];
  display = "none"

  constructor(private dataService: DataService) { }

      ngOnInit(): void {
          this.dataService.retrieveSpecialists().subscribe(
            response => {
              this.specialist = response;
            }
          );
      }

      openModal() {
        this.display = "block";
      }
      onCloseHandled() {
        this.display = "none";
      }

      submitResponses() {
        console.log(this.specId);
        this.display = "none";
        this.dataService.deleteSpecialists(this.specId).subscribe(
          response=>{
            console.log(response);
            window.location.reload();
          },
          error => {
            console.log(error);
          }
        );
      }

      onCheckBoxClick(event: any, specialistId: any) {
        if(event.target.checked) {
          this.specId.push(specialistId);
        } else {
          let index = this.specId.indexOf(specialistId);
          if (index > -1) {
            this.specId.splice(index, 1);
          }
        }
        console.log(this.specId);
      }

}

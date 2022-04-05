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

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
      this.dataService.retrieveSpecialists().subscribe(
        response => {
          this.specialist = response;
        }
      );
  }

  submitResponses() {
    console.log(this.specId);
    this.dataService.deleteSpecialists(this.specId)
  }

  pushSpecId(specialistId : any){
    console.log(specialistId);
    this.specId.push(specialistId);
  }

}

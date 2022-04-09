import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {DataService} from "../services/data.service";

export class Credential {
  constructor(
    public username: String,
    public password: String,
  ) {
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router,
              public dataService: DataService) { }

  credential: Credential | undefined;

  Credentials = {
    username: "",
    password: "",
  }

  errorMessage = 'invalid credentials';
  invalidLogin = false;

  ngOnInit(): void {
    this.dataService.authenticate().subscribe(
      response=>{
        console.log(response);
        this.credential = response;
      });
  }

  handleLogin() {
    if(this.credential?.username === this.Credentials.username && this.credential.password === this.Credentials.password){
      console.log("Authentic Admin");
      sessionStorage.setItem('authenticatedUser', this.Credentials.username);
      this.router.navigate(['welcome', this.Credentials.username]);
      this.invalidLogin = false;
    }
    else {
      this.invalidLogin = true;
    }
  }

}


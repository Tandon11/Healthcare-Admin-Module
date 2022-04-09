import { Injectable } from '@angular/core';
import {DataService} from "./data.service";
import {ActivatedRouteSnapshot, Router, RouterStateSnapshot} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class RouteGaurdService {

  constructor(private dataService: DataService,
              private route: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      if(this.dataService.isUserLoggedIn())
          return true;

      this.route.navigate(['login']);
      return false;
  }
}

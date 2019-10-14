import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';


@Injectable()
export class RouterService {

  constructor(private router: Router, private location: Location) { }

  routeToDashboard() {
    this.router.navigate(['admindashboard']);
  }

  routeToLogin() {
    this.router.navigate(['login']);
  }

  routeToEmployeeDashboard() {
    this.router.navigate(['empdashboard']);
  }
  
  routeToCustomerDashboard() {
    this.router.navigate(['customerdashboard']);
  }

  routeToRegister() {
    this.router.navigate(['register']);
  }
   
  routeBack() {
    this.location.back();
  }

 
}
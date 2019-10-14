import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { AuthenticationService } from '../services/authentication.service';
import { RouterService } from '../services/router.service';
import { Vehicle } from '../Vehicle';
import { Travel } from '../Travel';

@Component({
  selector: 'app-cancelTrip',
  templateUrl: './cancel-trip.component.html',
  styleUrls: ['./cancel-trip.component.css']
})
export class CancelTripComponent implements OnInit {  
  
  travel: Travel;
  errorMessage: string;
  tripSelectedValue: string;  
  authenticationServ: AuthenticationService;    
  travelList: Array<Travel>;

  constructor(private _authService: AuthenticationService, private router: Router, private location: Location,
    private routerService: RouterService) {   
    this.authenticationServ=_authService;
    this.tripSelectedValue = ''; 
    this.travelList = [];   
    this.travel = new Travel(); 
  }

   ngOnInit() {
    this.loadTravel();    
  }

    ngDoCheck(){    
    this.travelList = this.authenticationServ.getTravelList().filter(t=>t.status.toLowerCase()!="cancel");    
  }  

  loadTravel()
  {
    this.authenticationServ.fetchTravelFromServer();
    this.travelList = this.authenticationServ.getTravelListById().filter(t=>t.status.toLowerCase()!="cancel");         
  }

  CancelTrip()
  {
    if (this.tripSelectedValue !== '' ) {
      
        this.travel.travelid=Number(this.tripSelectedValue);
        this.authenticationServ.CancelTrip(this.tripSelectedValue).subscribe(addedNote => {        
        alert("Trip cancelled successfully");
        this.routerService.routeToCustomerDashboard();         
      },
        error => {
          this.errorMessage = error.message;
        }
      );
      
    } else {
      this.errorMessage = 'Please select the trip(location)';
    } 
   }
}
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { AuthenticationService } from '../services/authentication.service';
import { RouterService } from '../services/router.service';
import { Vehicle } from '../Vehicle';
import { Travel } from '../Travel';

@Component({
  selector: 'app-Trip',
  templateUrl: './confirm-trip.component.html',
  styleUrls: ['./confirm-trip.component.css']
})
export class ConfirmTripComponent implements OnInit {
  
  vehicle: Vehicle;
  travel: Travel;
  errorMessage: string;
  tripSelectedValue: string;
  vehicleSelectedValue: string;
  authenticationServ: AuthenticationService;  
  vehicleList: Array<Vehicle>;
  travelList: Array<Travel>;

  constructor(private _authService: AuthenticationService, private router: Router, private location: Location,
    private routerService: RouterService) {   
    this.authenticationServ=_authService;
    this.tripSelectedValue = '';
    this.vehicleSelectedValue = '';
    this.vehicleList = [];
    this.travelList = [];   
    this.travel = new Travel(); 
  }

   ngOnInit() {
    this.loadTravel();
    this.loadVehicle();
  }

    ngDoCheck(){    
    this.travelList = this.authenticationServ.getTravelList().filter(t=>t.status.toLowerCase()=="book");  
    this.vehicleList = this.authenticationServ.getVehicleList();  
  }

  loadVehicle()
  {
    this.authenticationServ.fetchVehicleList();
    this.vehicleList = this.authenticationServ.getVehicleList();  
  }

  loadTravel()
  {
    this.authenticationServ.fetchTravelFromServer();
    this.travelList = this.authenticationServ.getTravelList().filter(t=>t.status.toLowerCase()=="book");        
  }

  ConfirmTrip()
  {
    if ((this.tripSelectedValue !== '' )&&(this.vehicleSelectedValue !== '' )) {     
      
      this.travel.travelid=Number(this.tripSelectedValue);
      this.travel.vehicleid= this.vehicleSelectedValue;
     
      this.authenticationServ.ConfirmRide(this.travel).subscribe(addedNote => {        
        alert("Trip confirmed");
        this.routerService.routeToEmployeeDashboard();            
      },
        error => {
          this.errorMessage = error.message;
        }
      );
      
    } else {
      this.errorMessage = 'Please select the trip and vehicle to confirm';
    } 
   }
}
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { AuthenticationService } from '../services/authentication.service';
import { RouterService } from '../services/router.service';
import { Vehicle } from '../Vehicle';
import { Travel } from '../Travel';

@Component({
  selector: 'app-trackTrip',
  templateUrl: './track-trip.component.html',
  styleUrls: ['./track-trip.component.css']
})
export class TrackTripComponent implements OnInit {  
 
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
    this.travelList = this.authenticationServ.getTravelList();      
  }  

  loadTravel()
  {
    this.authenticationServ.fetchTravelFromServer();
    this.travelList = this.authenticationServ.getTravelListById();         
  }

  TrackTrip()
  {
    if (this.tripSelectedValue !== '' ) {
        
      this.travel.travelid=Number(this.tripSelectedValue);
      this.authenticationServ.TrackTrip(this.tripSelectedValue);      
      alert('Status:'+this.authenticationServ.getTrack().status);
      this.routerService.routeToCustomerDashboard();   
      
    } else {
      this.errorMessage = 'Title,Content,Select any one of Category,Reminder are required fields';
    } 
   }
}
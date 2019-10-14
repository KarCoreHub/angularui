import { Component,OnInit,DoCheck } from '@angular/core';
import { Travel } from '../Travel';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-travel-view',
  templateUrl: './travel-view.component.html',
  styleUrls: ['./travel-view.component.css']
})
export class TravelViewComponent implements OnInit,DoCheck {

  travels: Array<Travel> = new Array<Travel>(); 
  errorMessage: string;
  authenticateService:AuthenticationService;
  
  constructor(private authenticateServ: AuthenticationService) {  
    this.authenticateService = authenticateServ;    
  }

  ngOnInit() {    
    this.authenticateService.fetchTravelFromServer();
    this.travels = this.authenticateService.getTravelList();          
  }

  ngDoCheck(){    
    this.travels = this.authenticateService.getTravelList();   
  }
}

import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterService } from '../services/router.service';
import { Vehicle } from '../Vehicle';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-note-taker',
  templateUrl: './register-vehicle.component.html',
  styleUrls: ['./register-vehicle.component.css']
})
export class RegisterVehicleComponent implements OnInit {
  vehicle: Vehicle;  
  errorMessage: string;
  vehicleSelectedValue: string;  
  vehicleList: Array<Vehicle>;  

  
  constructor(private authenticateService: AuthenticationService    
    ,private route: ActivatedRoute,private routerService: RouterService) {   
    this.vehicleSelectedValue = '';    
    this.vehicleList = [];      
  }

 
  ngOnInit() {
    this.vehicle = new Vehicle();   
  }
  

  AddVehicle() {
    if ((this.vehicle.Name !== '' )&&(this.vehicle.Number !== '')&&(this.vehicle.Model !== '')&&
    (this.vehicle.City !== '')&&(this.vehicle.RegDate.toDateString()!='')) {     
      
      this.vehicle.EmpId= this.authenticateService.getUserId();
      this.authenticateService.RegisterVehicle(this.vehicle).subscribe(addedNote => {        
        alert("Vehicle Added Successfully");
        this.routerService.routeToEmployeeDashboard();             
      },
        error => {
          this.errorMessage = error.message;
        }
      );
      
    } else {
      this.errorMessage = 'Vehicle Number,Name,Model,RegDate and City are required fields';
    }
  }
}

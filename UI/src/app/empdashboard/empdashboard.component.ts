import { Component } from '@angular/core';

import { MatDialog } from '@angular/material';


import { AuthenticationService } from '../services/authentication.service';
import { RegisterVehicleComponent } from '../register-vehicle/register-vehicle.component';
import { TravelViewComponent } from '../travel-view/travel-view.component';
import { ConfirmTripComponent } from '../confirm-trip/confirm-trip.component';


@Component({
  selector: 'empdashboard',
  templateUrl: './empdashboard.component.html',
  styleUrls: ['./empdashboard.component.css']
})

export class empdashboardComponent {
  authenticateService:AuthenticationService;

  constructor(private dialog: MatDialog,authenticationService:AuthenticationService) {
    this.authenticateService = authenticationService;
   // this.noteService.fetchNotesFromServer();   
  }

  RegisterVehicle() {
    this.dialog.open(RegisterVehicleComponent, {
      data: {
        //note: this.Id,
      }
    }).afterClosed().subscribe(result => {
      //this.routerService.routeBack();
    });
  }
  
  ConfirmRide() {
    this.dialog.open(ConfirmTripComponent, {
      data: {
        //note: this.Id,
      }
    }).afterClosed().subscribe(result => {
      //this.routerService.routeBack();
    })
  }

  ViewSummary() {
    this.dialog.open(TravelViewComponent, {
      data: {
        //note: this.Id,
      }
    }).afterClosed().subscribe(result => {
      //this.routerService.routeBack();
    })
  }  
}

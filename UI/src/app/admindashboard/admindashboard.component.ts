import { Component } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { MatDialog } from '@angular/material';
import { RegisterComponent } from '../register/register.component';


@Component({
  selector: 'admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})

export class admindashboardComponent {
  authenticateService:AuthenticationService;
  constructor(private authenticateServ: AuthenticationService, private dialog: MatDialog) {
    this.authenticateService = authenticateServ;
  }  
  
  AddUser() {
    this.dialog.open(RegisterComponent, {
      data: {
        //note: this.Id,
      }
    }).afterClosed().subscribe(result => {
      //this.routerService.routeBack();
    });
  } 
  
}

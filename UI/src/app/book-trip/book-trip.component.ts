import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { RouterService } from '../services/router.service';
import { Vehicle } from '../Vehicle';
import { AuthenticationService } from '../services/authentication.service';
import { Travel } from '../Travel';

@Component({
  selector: 'app-book-trip',
  templateUrl: './book-trip.component.html',
  styleUrls: ['./book-trip.component.css']
})
export class BookTripComponent implements OnInit {
  travel: Travel;  
  errorMessage: string; 
  

  constructor(private authenticateService: AuthenticationService, 
    private dialog: MatDialog
    ,private route: ActivatedRoute,private routerService: RouterService) {     
  }
 
  ngOnInit() {
    this.travel = new Travel();   
  }
  
  BookTrip() {
    if ((this.travel.fromloc !== '' )&&(this.travel.toloc !== '' )&&(this.travel.contactno !== '' )
    &&(this.travel.tdate.toDateString() !== '' )) {           
      this.travel.cusid = this.authenticateService.getUserId();
      this.travel.status="Book";
      this.authenticateService.BookTrip(this.travel).subscribe(addedNote => {        
        alert("Trip Booked Successfully");
        this.routerService.routeToCustomerDashboard();            
      },
        error => {
          this.errorMessage = error.message;
        }
      );      
    } else {
      this.errorMessage = '**From ,To location,Date,Contact number are required fields';
    }
  }
}

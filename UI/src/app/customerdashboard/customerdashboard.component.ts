import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { BookTripComponent } from '../book-trip/book-trip.component';
import { CancelTripComponent } from '../cancel-trip/cancel-trip.component';
import { TrackTripComponent } from '../track-trip/track-trip.component';


@Component({
  selector: 'customerdashboard',
  templateUrl: './customerdashboard.component.html',
  styleUrls: ['./customerdashboard.component.css']
})

export class customerdashboardComponent {

  constructor(private dialog: MatDialog) {     
  }

 
  BookTrip() {
    this.dialog.open(BookTripComponent, {
      data: {       
      }
    }).afterClosed().subscribe(result => {     
    })
  }

  CancelTrip() {
    this.dialog.open(CancelTripComponent, {
      data: {       
      }
    }).afterClosed().subscribe(result => {      
    })
  }
  
  TrackTrip() {
    this.dialog.open(TrackTripComponent, {
      data: {        
      }
    }).afterClosed().subscribe(result => {      
    })
  }
}

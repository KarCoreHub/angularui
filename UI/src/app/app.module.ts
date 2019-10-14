import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { MatDialogModule } from '@angular/material/dialog';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule, MatNativeDateModule } from '@angular/material';

import { AuthenticationService } from './services/authentication.service';
import { RouterService } from './services/router.service';
import { CanActivateRouteGuard } from './can-activate-route.guard';
import { RegisterComponent } from './register/register.component';
import { empdashboardComponent } from './empdashboard/empdashboard.component';
import { RegisterVehicleComponent } from './register-vehicle/register-vehicle.component';
import { admindashboardComponent } from './admindashboard/admindashboard.component';
import { customerdashboardComponent } from './customerdashboard/customerdashboard.component';
import { TravelViewComponent } from './travel-view/travel-view.component';
import { BookTripComponent } from './book-trip/book-trip.component';
import { ConfirmTripComponent } from './confirm-trip/confirm-trip.component';
import { CancelTripComponent } from './cancel-trip/cancel-trip.component';
import { TrackTripComponent } from './track-trip/track-trip.component';


const appRoutes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'NewVehicle', component: RegisterVehicleComponent },
  { path: 'empdashboard', component: empdashboardComponent },
  { path: 'admindashboard', component: admindashboardComponent },
  { path: 'customerdashboard', component: customerdashboardComponent },
  { path: 'travelview', component: TravelViewComponent },
  { path: 'booktrip', component: BookTripComponent },
  { path: 'confirmtrip', component:ConfirmTripComponent },
  { path: 'canceltrip', component:CancelTripComponent },
  { path: 'tracktrip', component:TrackTripComponent },
  {
    path: 'dashboard',   
    canActivate: [CanActivateRouteGuard],
    children: [
      /*{ path: 'view/noteview', component: NoteViewComponent },          
      { path: '', redirectTo: 'view/noteview', pathMatch: 'full' },
      { path: 'view/editview', component: EditNoteOpenerComponent },
      { path: 'note/:noteId/edit', component: EditNoteOpenerComponent, outlet: 'noteEditOutlet' },

      { path: 'view/categoryview', component:CategoryviewComponent},
      { path: '', redirectTo: 'categoryview', pathMatch: 'full' },
      { path: 'view/editcategory', component: EditCategoryViewComponent },
      { path: 'category/:categoryId/edit', component: EditCategoryViewComponent, outlet: 'CategoryOutlet' },

      { path: 'view/reminderview', component: ReminderviewComponent },
      { path: '', redirectTo: 'reminderview', pathMatch: 'full' },
      { path: 'view/editreminder', component: EditReminderViewComponent },
      { path: 'reminder/:reminderId/edit', component: EditReminderViewComponent, outlet: 'ReminderOutlet' }*/
    ]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,   
    LoginComponent,
    empdashboardComponent,    
    RegisterComponent,
    admindashboardComponent,   
    RegisterVehicleComponent,  
    customerdashboardComponent,
    ConfirmTripComponent,
    RegisterComponent,
    BookTripComponent,
    TravelViewComponent,
    CancelTripComponent,
    TrackTripComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatExpansionModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    FormsModule,
    HttpClientModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatDatepickerModule,
        MatNativeDateModule, 
    RouterModule.forRoot(appRoutes)
  ],
  providers: [    
    AuthenticationService,
    RouterService,    
    CanActivateRouteGuard
  ],
  bootstrap: [AppComponent],
  entryComponents: [],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})

export class AppModule { }

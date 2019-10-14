import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { Travel } from '../Travel';
import { Vehicle } from '../Vehicle';


@Injectable()
export class AuthenticationService {
  travel: Travel;
  travels: Array<Travel>;
  vehicleList:Array<Vehicle>;
  type:string='';
  errorMessage: string = '';
  constructor(private httpClient: HttpClient) {
     this.travels= new Array<Travel>();
  }

  fetchTravelFromServer() {
    const headers = new HttpHeaders().set("content-type", "text/plain")
      .set('Authorization', 'Bearer ' + this.getBearerToken())
     .set('Access-Control-Allow-Origin', '*').set('Access-Control-Allow-Methods', 'GET');
      return this.httpClient.get<Array<Travel>>('http://localhost:29460/auth/ViewSummary', { headers })
     .subscribe((travels) =>  this.travels = travels)
     , error => {
        this.errorMessage = error.message;
      };          
  }

  fetchVehicleList() {
    const headers = new HttpHeaders().set("content-type", "text/plain")
      .set('Authorization', 'Bearer ' + this.getBearerToken())
     .set('Access-Control-Allow-Origin', '*').set('Access-Control-Allow-Methods', 'GET');
      return this.httpClient.get<Array<Vehicle>>('http://localhost:29460/auth/ViewVehicle', { headers })
     .subscribe((vehicleList) =>  this.vehicleList = vehicleList)
     , error => {
        this.errorMessage = error.message;
      };          
  }

  getTravelList() {
    return this.travels;
  }

  getTrack() {
    return this.travel;
  }

  getTravelListById() {
    return this.travels.filter(t=>t.cusid==this.getUserId());
  }

  getVehicleList() {
    return this.vehicleList;
  }

  getType() {
    return this.type;
  }

  registerUser(data) {
    const headers = new HttpHeaders().set("content-type", "application/json").set
      ('Access-Control-Allow-Origin', '*').set('Access-Control-Allow-Methods', 'POST');
    return this.httpClient.post('http://localhost:29460/auth/register', data, {
      headers
    });
  }
  authenticateUser(data) {
    const headers = new HttpHeaders().set("content-type", "application/json").set
      ('Access-Control-Allow-Origin', '*').set('Access-Control-Allow-Methods', 'POST');
    return this.httpClient.post('http://localhost:29460/auth/login', data, {
      headers
    });
  }

 getUserType(data) {     
     const headers = new HttpHeaders().set("content-type", "application/json").set
      ('Access-Control-Allow-Origin', '*').set('Access-Control-Allow-Methods', 'POST');
    return this.httpClient.post('http://localhost:29460/auth/GetUserType', data, {
      headers
    });
  }

  RegisterVehicle(data) {
    const headers = new HttpHeaders().set("content-type", "application/json").set
      ('Access-Control-Allow-Origin', '*').set('Access-Control-Allow-Methods', 'POST');
    return this.httpClient.post('http://localhost:29460/auth/RegisterVehicle', data, {
      headers
    });
  }

  BookTrip(data) {
    const headers = new HttpHeaders().set("content-type", "application/json").set
      ('Access-Control-Allow-Origin', '*').set('Access-Control-Allow-Methods', 'POST');
    return this.httpClient.post('http://localhost:29460/auth/BookTrip', data, {
      headers
    });
  }

  CancelTrip(data) {
    const headers = new HttpHeaders().set("content-type", "application/json").set
      ('Access-Control-Allow-Origin', '*').set('Access-Control-Allow-Methods', 'POST');
    return this.httpClient.post('http://localhost:29460/auth/CancelTrip', data, {
      headers
    });
  }

  TrackTrip(data) {
    const headers = new HttpHeaders().set("content-type", "application/json").set
      ('Access-Control-Allow-Origin', '*').set('Access-Control-Allow-Methods', 'POST');
    return this.httpClient.post<Travel>('http://localhost:29460/auth/TrackTrip', data, {
      headers
    }).subscribe((travel) =>  this.travel = travel);
  }

  ConfirmRide(data) {
    const headers = new HttpHeaders().set("content-type", "application/json").set
      ('Access-Control-Allow-Origin', '*').set('Access-Control-Allow-Methods', 'POST');
    return this.httpClient.post('http://localhost:29460/auth/ConfirmRide', data, {
      headers
    });
  }

  getToken(): string {
    let token = localStorage.getItem('bearerToken');
    return token ? token : "";
  }

  isAuthenticated(): boolean {
    let token = '';
    token = this.getToken();
    if (token === "null")
      token = '';
    // Check whether the token is expired or not
    // return true or false
    return token != "" ? true : false;
  }

  setBearerToken(token) {
    localStorage.setItem('bearerToken', token);
  }

  getBearerToken() {
    return localStorage.getItem('bearerToken');
  }

  getUserId() {
    return localStorage.getItem('userId');
  }
  setUserId(userId) {
    localStorage.setItem('userId', userId);
  }

  getUserPassword() {
    return localStorage.getItem('Password');
  }
  setUserPassword(Password) {
    localStorage.setItem('Password', Password);
  }

 
  setUserType(Type) {
    localStorage.setItem('UserType', Type);
  }

  isUserAuthenticated(token): Promise<boolean> {
    const headers = new HttpHeaders().set("content-type", "application/json");
    return this.httpClient.get('http://localhost:8080/auth/IsUserAuthenticated', {
      headers
    })
      .pipe(map((res) => res["isAuthenticate"]))
      .toPromise();
  }

  logout() {   
    localStorage.removeItem('bearerToken');
    localStorage.removeItem('userId');    
    localStorage.removeItem('Password');    
  }
}
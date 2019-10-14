import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { AuthenticationService } from '../services/authentication.service';
import { RouterService } from '../services/router.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent { 
  constructor(private _authService: AuthenticationService, private router: Router, private location: Location,
    private routerService: RouterService) {   
  } 
  logout() {
    this._authService.logout();
    this.router.navigate(['login']);
  }
}
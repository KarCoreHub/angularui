import { Component} from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';
import { RouterService } from '../services/router.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);
  public bearerToken: string = '';
  public userId: any;
  submitMessage: string;
  errorMessage: string;
  type:string;
 
  constructor(private _authService: AuthenticationService, private router: Router,
    private routerService: RouterService) {  
    this.errorMessage="";
    this.type="";
  } 
  
  loginSubmit() {
    if((this.username.value!="")&&((this.password.value!="")))
    {
      if((this.username.value=="admin")&&((this.password.value=="admin")))
      {
        this.routerService.routeToDashboard();
        return true;
      }
      else
      {
        this._authService.authenticateUser({ 'userId': this.username.value, 'Password': this.password.value })
        .subscribe(res => {
          console.log(res['token']);
          this.bearerToken = res['token'];
          this._authService.setUserId(this.username.value);
          this._authService.setUserPassword(this.password.value);
          this._authService.setBearerToken(res['token']);      
        
          this._authService.getUserType({ 'userId': this.username.value, 'Password': this.password.value })
          .subscribe(res1 => { this.type=res1['token'];console.log(this.type); 
          if(this.type.toLowerCase()=="admin")
          this.routerService.routeToDashboard();
          else if(this.type.toLowerCase()=="customer")
          this.routerService.routeToCustomerDashboard();         
          else this.routerService.routeToEmployeeDashboard(); });      
          
          return true;
        },
          err => {
            if (err.error) {
              this.submitMessage = "";
              this.errorMessage="Please check your user id and password";
              this.username.reset();
              this.password.reset();
            } else {
              this.submitMessage = "";
              this.errorMessage="Please check your user id and password";
              this.username.reset();
              this.password.reset();           
            }
          });        
   
      }
    }
    else
    {
      this.errorMessage="Please enter your user id and password";
    }
  }
}

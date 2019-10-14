import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective } from '@angular/forms';
import { RouterService } from '../services/router.service';
import { AuthenticationService } from '../services/authentication.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  submitMessage: string;
  userType: string;
  firstName = new FormControl();
  lastName = new FormControl();
  UserId = new FormControl();
  password = new FormControl();
  Type = new FormControl();
  Phone = new FormControl();
  City = new FormControl();
  registerForm: FormGroup = new FormGroup({
    firstName: new FormControl(),
    lastName: new FormControl(),
    UserId: new FormControl(),
    password: new FormControl(),
    Type: new FormControl(),
    Phone: new FormControl(),
    City: new FormControl()
  });
  @ViewChild(FormGroupDirective)
  formGroupDirective: FormGroupDirective;

  constructor(private _authService: AuthenticationService,
    private routerService: RouterService) { }

  ngOnInit() {
  }

  registerSubmit() {
    console.log("inside register submit form");

    this._authService.registerUser(this.registerForm.value)
      .subscribe(res => {       
        alert("User registered Successfully");
        this.routerService.routeToDashboard();
      },
        err => {
          if (err.error) {
            this.submitMessage = err.error.message;
          } else {
            this.submitMessage = err.message;
          }

        });

    this.registerForm.reset();
    this.formGroupDirective.resetForm();

  }

}

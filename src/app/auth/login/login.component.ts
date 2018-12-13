import { Component, OnInit, ChangeDetectorRef, OnChanges } from '@angular/core';

import { Router } from '@angular/router';
import { Kinvey, KinveyError } from 'kinvey-angular2-sdk';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit, OnChanges {
  username: string;
  password: string;
  error: Kinvey.BaseError;
  errorString:string;
  errorFlag:boolean = false;

  constructor(private router: Router, private changeDetectorRef:ChangeDetectorRef) { }
  ngOnChanges() {
    console.log( 'this is ngOnChanges')
  }

  ngOnInit() {
  }
  login() {
    this.error = undefined;

    Kinvey.User.login(this.username, this.password)
      .then(() => {  console.log( 'login: okay' ); this.router.navigate(['/'])} )
      .catch((error: Kinvey.BaseError) => {
        this.error = error;
        console.log( 'login: error is now', this.error)
        // Update the view
        this.changeDetectorRef.detectChanges()
      });
  }
  
  loginWithMIC() {
    this.error = undefined;

    Kinvey.User.loginWithMIC('<micRedirectUri>')
      .then(() => this.router.navigate(['/']))
      .catch((error: Kinvey.BaseError) => {
        console.log( 'loginWithMIC: error', error)
        this.error = error;
        this.changeDetectorRef.detectChanges()
      });
  }
}

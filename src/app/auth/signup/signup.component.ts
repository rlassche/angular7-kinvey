import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { Kinvey, User } from 'kinvey-angular2-sdk';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  kinveyUser:Kinvey.User ;
  error: Kinvey.BaseError;
  username: string = ''
  password: string = ''
  firstname: string = ''
  lastname: string = ''
  errorMessage: string

  constructor(private router: Router, private changeDetectorRef: ChangeDetectorRef) {
    console.log('signup constructor');
    this.activeUser() ;
  }

  activeUser() {
    this.kinveyUser = Kinvey.User.getActiveUser();
    console.log( "ActiveUser ...", this.kinveyUser)
    if (this.kinveyUser) {
      this.kinveyUser.me()
        .then((activeUser: Kinvey.User) => {
          console.log('then: activeUser', activeUser.username)
          this.errorMessage = 'Cannot signup. User ' + activeUser.username + ' is already logged in!'
        this.changeDetectorRef.detectChanges()
        })
        .catch((error: Kinvey.BaseError) => {
          // ...
          console.log('catch: error', error)
          this.errorMessage = error.message;
        this.changeDetectorRef.detectChanges()
        });
    } else {
      console.log( 'activeuser else tak')
    }
  }
  ngOnInit() {
  }
  signup() {
    console.log('this is signup.component: signup')
    //this.errorMessage = undefined;

    let promise: Promise<User> = Kinvey.User.signup({
      username: this.username,
      password: this.password,
      firstname: this.firstname,
      lastname: this.lastname
    });

    promise.then(
      () => {
        console.log('login: okay');
        this.router.navigate(['/'])
      })
      .catch((error: Kinvey.BaseError) => {
        this.error = error;
        console.log('signup: error is now', this.error)

        this.changeDetectorRef.detectChanges()
      });
  }
}

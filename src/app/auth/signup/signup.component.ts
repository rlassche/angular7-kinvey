import { Component, OnInit, ChangeDetectorRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NG_VALIDATORS,  FormGroup, FormControl, FormBuilder, FormArray, NgForm, Validators } from '@angular/forms';
import { Kinvey, User } from 'kinvey-angular2-sdk';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  @ViewChild('signupForm')
  public signupForm: FormGroup;
  kinveyUser: Kinvey.User;
  error: Kinvey.BaseError;
  username: string = ''
  password: string = ''
  firstname: string = ''
  lastname: string = ''
  email: string = '';
  errorMessage: string

  constructor(private router: Router, private changeDetectorRef: ChangeDetectorRef) {
    console.log('signup constructor');
    this.activeUser();

  }

  activeUser() {
    this.kinveyUser = Kinvey.User.getActiveUser();
    console.log("ActiveUser ...", this.kinveyUser)
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
      console.log('activeuser else tak')
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
      lastname: this.lastname,
      email: this.email
    });

    promise.then(
      () => {
        console.log('login: okay');
        this.verifyEmail();
      })
      .catch((error: Kinvey.BaseError) => {
        this.error = error;
        console.log('signup: error is now', this.error)

        this.changeDetectorRef.detectChanges()
      });
  }
  verifyEmail() {
    console.log('verfyEmail for username == ', this.username)
    //const user: Kinvey.User = new Kinvey.User(this.username);
    //console.log('user: ', user);
    Kinvey.User.verifyEmail(this.username)
      .then((response: any) => {
        this.router.navigate(['/'])
        console.log('verifyEmail: then: ', response)
      })
      .catch((error: Kinvey.BaseError) => {
        this.errorMessage = error.message + ' ' + error.debug;
        console.log('verifyEmail: catch: ', error)
        this.changeDetectorRef.detectChanges()
      });
  }
}

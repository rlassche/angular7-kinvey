import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { Kinvey } from 'kinvey-angular2-sdk';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  user: {};
  error: Kinvey.BaseError;
  username: string = ''
  password: string = ''
  firstname: string = ''
  lastname: string = ''
  errorMessage:string

  constructor(private router: Router, private changeDetectorRef: ChangeDetectorRef) {
    console.log('signup constructor')
    this.user = new Kinvey.User({
      _id: '',
      //_acl: { /* ACL */ },
      //_kmd: { /* Metadata */ },
      //email: 'email'
      username: '',
      password: ''
    });
  }

  ngOnInit() {
  }
  signup() {
    console.log('this is signup.component: signup', this.user)
    this.errorMessage = undefined;

    let promise = Kinvey.User.signup({
      username: this.username,
      password: this.password,
      firstname: this.firstname,
      lastname: this.lastname
    });

    this.router.navigate(['/kinvey']);

    /*
    Kinvey.User.signup(this.username, this.password)
      .then(() => {  console.log( 'login: okay' ); this.router.navigate(['/'])} )
      .catch((error: Kinvey.BaseError) => {
        this.error = error;
        console.log( 'login: error is now', this.error)

        this.changeDetectorRef.detectChanges()
      });
      */



      /*
    promise.then(() => {
      console.log('promise then signup')
      this.router.navigate(['/logout']);
    }).catch((error: Kinvey.BaseError) => {
      console.log('promise error signup', error.message)
      // Update the view
      console.log('error is now: ', error)
      this.errorMessage = error.message
      //this.changeDetectorRef.detectChanges()
    });
    */
    /*
    Kinvey.User.signup(this.user)
      .then(
        () => { 
            console.log( 'user: ', this.user)
            this.router.navigate(['/']);
        })
      .catch((error: Kinvey.BaseError) => {
        this.error = error;
        console.log('signup: error:' + error)
      });
      */
  }
}

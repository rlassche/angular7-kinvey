import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Kinvey } from 'kinvey-angular2-sdk';

@Component({
  selector: 'reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  username:string
  constructor(private router: Router) { }

  ngOnInit() {
    if( this.loggedInUser() !== null ) {
      console.log( 'this.resetPassword()' ) ;
    } else {
      console.log( 'User is not logged in' ) ;
    }
  }

  loggedInUser() {
    this.username = null;

    let activeUser = Kinvey.User.getActiveUser();
    console.log('activeUser: ', activeUser)
    console.log('in logout')
    if (activeUser !== null) {
      console.log('activeUser is !== null: ', activeUser)
      console.log('activeUser name : ', activeUser.data['username'])
      this.username = activeUser.data['username'];
      // Update the active users data, and any data that was deleted since the last call 
      // will also be removed from the active user stored on the device.
      //let promise = Promise.resolve( activeUser )
      //promise = activeUser.me();
      //console.log( 'activeUser is !== null: promise', promise)
    } else {
      console.log('NO user is logged in!')
    }
    return this.username ;
  }
  resetPassword() {

  // Disable submit button
  let me = this.username;
  this.username = null ;
  Kinvey.User.resetPassword( me )
    .then(() => {
        console.log( 'resetPassword okey');
        this.router.navigate(['/login']);
    })
    .catch((error: Kinvey.BaseError) => {
        console.log( 'resetPassword error: ', error);
    });
  }
}

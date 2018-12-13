import { Component, OnInit,ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { Kinvey, KinveyError } from 'kinvey-angular2-sdk';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.sass']
})
export class LogoutComponent implements OnInit {

  username: string;
  constructor(private router: Router, private changeDetectorRef:ChangeDetectorRef ) { }

  ngOnInit() {
    //this.logout()
    let activeUser = Kinvey.User.getActiveUser();
    console.log('activeUser: ', activeUser)
    console.log('in logout')
    if (activeUser !== null) {
      console.log('activeUser is !== null: ', activeUser)
      console.log('activeUser name : ', activeUser.data['username'])
      this.username = activeUser.data['username'];
      // Update the active users data, and any data that was deleted since the last call 
      // will also be removed from the active user stored on the device.
      let promise = Promise.resolve( activeUser )
      promise = activeUser.me();
      //console.log( 'activeUser is !== null: promise', promise)
    } else {
      console.log('User is already logged out')
    }
  }
  logout() {
    Kinvey.User.logout().then(
      () => { 
        console.log("okay, logged out"); 
        this.username=null; 

        // Update the view
        this.changeDetectorRef.detectChanges()

        this.router.navigate(['/login']);

      })
      .catch((error: KinveyError) => {
        console.log('logout error')
      })

  }
}

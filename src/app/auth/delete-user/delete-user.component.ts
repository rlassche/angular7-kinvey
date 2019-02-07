import { Component, OnInit } from '@angular/core';
import { Kinvey } from 'kinvey-angular2-sdk';
import { Observable, fromEvent } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpParams, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-deleteuser',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.sass']
})
export class DeleteuserComponent implements OnInit {

  username: string
  error:string;
  constructor(private http:HttpClient) { }

  ngOnInit() {
  }

  deleteUser() {
    console.log('delete User : ', this.username);
    const dataStore = Kinvey.DataStore.collection('user');
    console.log( 'dataStore: ', dataStore)
    /*
    dataStore.findById( 'vera').subscribe( (data)=> {
      console.log( 'data: ', data)
    },
    (error) => {
      console.log( 'data error: ', error)
    })
    */
   let headers = new HttpHeaders();
   headers.append('Authorization', btoa('username:password'));
   console.log( 'headers: ', headers)
   this.http.get( 'http://baas.kinvey.com/user/:appKey/:id', {headers})
   
  }
}

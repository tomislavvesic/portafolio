import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class ApiCallerService {

  constructor(private realtimeDatabase: AngularFireDatabase, private http: HttpClient) { }

  getPersonalInfo() {
    console.log("Sending api call")
    console.log(location.hostname)

    console.log("PULL DATA")
    const database_data = this.realtimeDatabase.object('/').valueChanges()
    database_data.subscribe(data => {
      console.log(data)
    })
    return database_data
  }
}

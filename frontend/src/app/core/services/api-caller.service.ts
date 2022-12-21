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
    const database_data = this.realtimeDatabase.object('/').valueChanges()

    // Remove console.log
    database_data.subscribe(data => {
      console.log(data)
    })
    return database_data
  }
}

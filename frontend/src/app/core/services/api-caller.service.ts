import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ApiCallerService {

  constructor(private http: HttpClient) { }

  getPersonalInfo() {
    console.log("Sending api call")
    return this.http.get('http://127.0.0.1:5000/personal_info');
  }
}

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
    console.log(location.hostname)
    return this.http.get('http://' + location.hostname + ':5000/personal_info');
  }
}

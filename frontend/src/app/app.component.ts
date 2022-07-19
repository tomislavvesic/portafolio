import { AfterContentInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import data from "./../assets/data/particles.json"

import { HttpClient } from '@angular/common/http';

declare var particlesJS: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterContentInit {
  bodyColor: string = 'color-mode-white'

  constructor(public router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    this.chooseBodyColor()
    this.router.navigate(['portofolio']);
    particlesJS('particles-js', data, () => { console.log('callback - particles.js config loaded') });
  }

  ngAfterContentInit(): void {
    // particlesJS('particles-js', data, () => { console.log('callback - particles.js config loaded') });
    null
  }


  chooseBodyColor() {
    this.bodyColor = 'color-mode-dark'
  }
}

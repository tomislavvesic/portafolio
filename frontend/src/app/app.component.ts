import { AfterContentInit, Component, OnInit } from '@angular/core';
import data from "./../assets/data/particles.json"

import { Router } from '@angular/router';

declare var particlesJS: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterContentInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
    this.router.navigate(['portofolio']);

  }

  ngAfterContentInit(): void {
    particlesJS('particles-js', data, () => { console.log('callback - particles.js config loaded') });
  }

  chooseBodyColor() {
    return 'color-mode-dark'
  }
}

import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';

import { PersonalInfoActions } from './core/actions/personal-info.actions';

import data from "./../assets/data/particles.json"

declare var particlesJS: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  bodyColor: string = 'color-mode-white'

  constructor(public store: Store) { }

  ngOnInit(): void {
    this.chooseBodyColor()
    particlesJS('particles-js', data, () => { console.log('callback - particles.js config loaded') });

    // Trigger states to pull API data
    this.getPersonalData()
  }


  chooseBodyColor() {
    this.bodyColor = 'color-mode-dark'
  }

  getPersonalData() {
    this.store.dispatch(PersonalInfoActions.GetPersonalInfoAction)
  }
}

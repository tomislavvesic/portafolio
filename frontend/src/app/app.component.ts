import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';

import { PersonalInfoActions } from './core/actions/personal-info.actions';

import data from "./../assets/data/particles.json"
import { faToggleOn } from '@fortawesome/free-solid-svg-icons';
import { faToggleOff } from '@fortawesome/free-solid-svg-icons';

declare var particlesJS: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  bodyColor: string = 'color-mode-white'
  faToggleOn = faToggleOn
  faToggleOff = faToggleOff
  toggle = false

  constructor(public store: Store) { }

  ngOnInit(): void {
    particlesJS('particles-js', data, () => { console.log('callback - particles.js config loaded') });

    // Trigger states to pull API data
    this.getPersonalData()
  }


  changePortfolioColor() {
    this.toggle = !this.toggle
    if (this.bodyColor === 'color-mode-dark') {
      this.bodyColor = 'color-mode-white'
    } else {
      this.bodyColor = 'color-mode-dark'
    }
  }

  getPersonalData() {
    this.store.dispatch(PersonalInfoActions.GetPersonalInfoAction)
  }
}

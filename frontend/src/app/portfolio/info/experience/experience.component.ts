import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { PersonalInfoState } from 'src/app/core/state/personal-info.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  @Select(PersonalInfoState.getPersonalInfo)
  personalInfo$!: Observable<any>;
  chosenExperience = 'iOLAP'
  chosenJobTitle = 'Web Developer'
  constructor() { }

  ngOnInit(): void {
    null
  }

  chooseExperience(input) {
    console.log(input)
    this.chosenExperience = input
  }

  chooseJobTitle(value) {
    this.chosenJobTitle = value
  }
}

import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { PersonalInfoState } from 'src/app/core/state/personal-info.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss']
})
export class PersonalInfoComponent {
  @Select(PersonalInfoState.getPersonalInfo)
  personalInfo$!: Observable<any>;
  constructor() { }
}

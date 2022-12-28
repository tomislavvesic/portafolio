import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { PersonalInfoState } from 'src/app/core/state/personal-info.state';
import { Observable, throwError } from 'rxjs';


@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {
  @Select(PersonalInfoState.getPersonalInfo)
  personalInfo$!: Observable<any>;
  constructor() { }

  ngOnInit(): void { }

}

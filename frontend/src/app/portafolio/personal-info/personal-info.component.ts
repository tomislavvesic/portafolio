import { Component, HostListener, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { PersonalInfoState } from 'src/app/core/state/personal-info.state';


@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss']
})
export class PersonalInfoComponent implements OnInit {
  @Select(PersonalInfoState.getPersonalInfo)
  personalInfo$!: Observable<any>;

  screenInLargeMode!: boolean;
  data!: any;
  personalInfo!: any;
  otherSkills!: any;
  programmingLanguages!: any;

  personalInfoMenu: any = {
    personalInfo: true,
    programmingLanguages: false,
    otherSkills: false
  }

  constructor() {
    this.getScreenSize();
  }

  ngOnInit(): void {
    this.personalInfo$.subscribe(data => {
      console.log(data)
      this.personalInfo = data?.personal_info
    })
    this.programmingLanguages = [{
      name: 'Python',
      skill: 50
    }, {
      name: 'Typescript',
      skill: 40
    }, {
      name: 'Sql',
      skill: 30
    }]
    this.otherSkills = [{
      name: 'English',
      skill: 50
    }]
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize() {
    this.screenInLargeMode = window.innerWidth >= 992 ? true : false;
  }

  testfunc() {
    console.log(typeof (this.personalInfo))
  }
}

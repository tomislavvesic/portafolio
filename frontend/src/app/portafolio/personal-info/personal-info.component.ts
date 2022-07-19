import { Component, HostListener, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss']
})
export class PersonalInfoComponent implements OnInit {
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

  constructor(private http: HttpClient) {
    this.getScreenSize();
  }

  ngOnInit(): void {
    this.personalInfo = [{
      key: 'Name',
      value: "Tomislav"
    }, {
      key: 'Surname',
      value: "Vesic"
    }, {
      key: 'Age',
      value: 25
    }]
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
    // console.log(this.data)
    // this.data = this.http.get('http://127.0.0.1:5000/portofolio');
    // console.log(this.data)
    // console.log(typeof (this.data))
    // this.data.subscribe((test: any) => {
    //   console.log(test)
    // })
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize() {
    this.screenInLargeMode = window.innerWidth >= 992 ? true : false;
  }
}
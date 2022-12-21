import { Component, Input, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { PersonalInfoState } from 'src/app/core/state/personal-info.state';

@Component({
  selector: 'app-portfolio-info',
  templateUrl: './portfolio-info.component.html',
  styleUrls: ['./portfolio-info.component.scss']
})
export class PortfolioInfoComponent implements OnInit {
  @Select(PersonalInfoState.getPersonalInfo)
  personalInfo$!: Observable<any>;
  @Input() textSize!: number

  personalInfoDescription!: string;

  constructor() { }

  ngOnInit(): void {
    null
    // info-content.setAttribute('style', 'white-space: pre;');
  }
}

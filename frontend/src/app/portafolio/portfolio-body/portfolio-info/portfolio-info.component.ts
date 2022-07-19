import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio-info',
  templateUrl: './portfolio-info.component.html',
  styleUrls: ['./portfolio-info.component.scss']
})
export class PortfolioInfoComponent implements OnInit {
  @Input() textSize!: number

  constructor() { }

  ngOnInit(): void {
    null
  }
}

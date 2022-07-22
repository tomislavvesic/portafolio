import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio-info',
  templateUrl: './portfolio-info.component.html',
  styleUrls: ['./portfolio-info.component.scss']
})
export class PortfolioInfoComponent implements OnInit {
  @Input() textSize!: number
  portfolioInfo!: string;

  constructor() { }

  ngOnInit(): void {
    this.portfolioInfo = 'Bacon ipsum dolor \n amet meatloaf ham turducken leberkas doner spare ribs buffalo kevin pork fatback corned beef bacon filet mignon frankfurter. Burgdoggen swine alcatra tail chislic short ribs pork loin drumstick picanha. Meatloaf picanha salami leberkas tail short loin, bresaola jowl ball tip. Tail corned beef short ribs frankfurter, sausage t-bone fatback pastrami burgdoggen turducken filet mignon drumstick.'
  }
}

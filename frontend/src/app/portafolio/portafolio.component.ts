import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.scss']
})
export class PortafolioComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
    null
  }

  choosePortfolioInfoColor() {
    return 'color-info-mode-dark'
  }

  choosePortfolioBodyColor() {
    return 'color-body-mode-dark'
  }
}

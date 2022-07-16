import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portafolio-projects',
  templateUrl: './portafolio-projects.component.html',
  styleUrls: ['./portafolio-projects.component.scss']
})
export class PortafolioProjectsComponent implements OnInit {
  imgSrc!: string;

  constructor() { }

  ngOnInit(): void {
  }

  onModalLoad(imgSrc: string) {
    this.imgSrc = imgSrc
  }
}

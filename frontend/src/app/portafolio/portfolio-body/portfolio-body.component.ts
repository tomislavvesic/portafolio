import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-portfolio-body',
  templateUrl: './portfolio-body.component.html',
  styleUrls: ['./portfolio-body.component.scss']
})
export class PortafolioHeaderComponent implements OnInit {
  displayInfo: boolean = true;
  displayProjects: boolean = false;
  displayContacts: boolean = false;

  constructor() { }

  ngOnInit(): void {
    null
  }

  onLoadInfo() {
    this.displayInfo = true;
    this.displayProjects = false;
    this.displayContacts = false;
  }
  onLoadProjects() {
    this.displayInfo = false;
    this.displayProjects = true;
    this.displayContacts = false;
  }
  onLoadContact() {
    this.displayInfo = false;
    this.displayProjects = false;
    this.displayContacts = true;
  }
}

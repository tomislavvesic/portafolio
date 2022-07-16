import { Component, HostListener, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-portafolio-header',
  templateUrl: './portafolio-header.component.html',
  styleUrls: ['./portafolio-header.component.scss']
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
    this.displayInfo = true;
  }


}

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortafolioProjectsComponent } from './portafolio-projects.component';

describe('PortafolioProjectsComponent', () => {
  let component: PortafolioProjectsComponent;
  let fixture: ComponentFixture<PortafolioProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortafolioProjectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortafolioProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

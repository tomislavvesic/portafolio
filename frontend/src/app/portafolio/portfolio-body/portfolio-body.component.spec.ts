import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortafolioHeaderComponent } from './portfolio-body.component';

describe('PortafolioHeaderComponent', () => {
  let component: PortafolioHeaderComponent;
  let fixture: ComponentFixture<PortafolioHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PortafolioHeaderComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortafolioHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

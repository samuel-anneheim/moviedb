import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationsPagesComponent } from './reservations-pages.component';

describe('ReservationsPagesComponent', () => {
  let component: ReservationsPagesComponent;
  let fixture: ComponentFixture<ReservationsPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservationsPagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservationsPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

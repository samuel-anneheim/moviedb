import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationsCreateComponent } from './reservations-create.component';

describe('ReservationsCreateComponent', () => {
  let component: ReservationsCreateComponent;
  let fixture: ComponentFixture<ReservationsCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservationsCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservationsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

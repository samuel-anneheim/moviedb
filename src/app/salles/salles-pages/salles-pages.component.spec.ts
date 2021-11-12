import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SallesPagesComponent } from './salles-pages.component';

describe('SallesPagesComponent', () => {
  let component: SallesPagesComponent;
  let fixture: ComponentFixture<SallesPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SallesPagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SallesPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

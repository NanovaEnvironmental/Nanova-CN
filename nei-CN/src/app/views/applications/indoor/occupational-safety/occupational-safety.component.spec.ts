import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OccupationalSafetyComponent } from './occupational-safety.component';

describe('OccupationalSafetyComponent', () => {
  let component: OccupationalSafetyComponent;
  let fixture: ComponentFixture<OccupationalSafetyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OccupationalSafetyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OccupationalSafetyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

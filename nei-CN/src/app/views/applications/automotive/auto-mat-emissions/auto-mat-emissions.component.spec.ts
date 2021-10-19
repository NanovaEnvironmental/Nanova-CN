import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoMatEmissionsComponent } from './auto-mat-emissions.component';

describe('AutoMatEmissionsComponent', () => {
  let component: AutoMatEmissionsComponent;
  let fixture: ComponentFixture<AutoMatEmissionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutoMatEmissionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoMatEmissionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

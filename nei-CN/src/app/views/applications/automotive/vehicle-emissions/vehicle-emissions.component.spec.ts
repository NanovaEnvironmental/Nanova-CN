import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleEmissionsComponent } from './vehicle-emissions.component';

describe('VehicleEmissionsComponent', () => {
  let component: VehicleEmissionsComponent;
  let fixture: ComponentFixture<VehicleEmissionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehicleEmissionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleEmissionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

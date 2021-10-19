import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleIndoorAirQualityComponent } from './vehicle-indoor-air-quality.component';

describe('VehicleIndoorAirQualityComponent', () => {
  let component: VehicleIndoorAirQualityComponent;
  let fixture: ComponentFixture<VehicleIndoorAirQualityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehicleIndoorAirQualityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleIndoorAirQualityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

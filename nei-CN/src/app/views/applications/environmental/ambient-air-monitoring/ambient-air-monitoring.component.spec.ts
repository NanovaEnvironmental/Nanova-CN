import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmbientAirMonitoringComponent } from './ambient-air-monitoring.component';

describe('AmbientAirMonitoringComponent', () => {
  let component: AmbientAirMonitoringComponent;
  let fixture: ComponentFixture<AmbientAirMonitoringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmbientAirMonitoringComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmbientAirMonitoringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

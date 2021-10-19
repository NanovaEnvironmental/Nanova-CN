import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FencelineMonitoringComponent } from './fenceline-monitoring.component';

describe('FencelineMonitoringComponent', () => {
  let component: FencelineMonitoringComponent;
  let fixture: ComponentFixture<FencelineMonitoringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FencelineMonitoringComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FencelineMonitoringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

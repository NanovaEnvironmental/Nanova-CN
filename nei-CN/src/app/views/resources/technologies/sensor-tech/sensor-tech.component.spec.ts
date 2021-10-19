import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SensorTechComponent } from './sensor-tech.component';

describe('SensorTechComponent', () => {
  let component: SensorTechComponent;
  let fixture: ComponentFixture<SensorTechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SensorTechComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SensorTechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

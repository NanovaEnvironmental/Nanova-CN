import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndoorAirQualityComponent } from './indoor-air-quality.component';

describe('IndoorAirQualityComponent', () => {
  let component: IndoorAirQualityComponent;
  let fixture: ComponentFixture<IndoorAirQualityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndoorAirQualityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndoorAirQualityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

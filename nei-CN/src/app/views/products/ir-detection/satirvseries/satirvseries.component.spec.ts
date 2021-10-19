import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SatirvseriesComponent } from './satirvseries.component';

describe('SatirvseriesComponent', () => {
  let component: SatirvseriesComponent;
  let fixture: ComponentFixture<SatirvseriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SatirvseriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SatirvseriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

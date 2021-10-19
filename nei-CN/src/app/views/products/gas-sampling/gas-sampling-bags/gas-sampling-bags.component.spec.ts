import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GasSamplingBagsComponent } from './gas-sampling-bags.component';

describe('GasSamplingBagsComponent', () => {
  let component: GasSamplingBagsComponent;
  let fixture: ComponentFixture<GasSamplingBagsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GasSamplingBagsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GasSamplingBagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

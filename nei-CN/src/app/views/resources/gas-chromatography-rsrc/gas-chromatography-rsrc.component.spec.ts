import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GasChromatographyRsrcComponent } from './gas-chromatography-rsrc.component';

describe('GasChromatographyRsrcComponent', () => {
  let component: GasChromatographyRsrcComponent;
  let fixture: ComponentFixture<GasChromatographyRsrcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GasChromatographyRsrcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GasChromatographyRsrcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

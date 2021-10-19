import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpectroscopyRsrcComponent } from './spectroscopy-rsrc.component';

describe('SpectroscopyRsrcComponent', () => {
  let component: SpectroscopyRsrcComponent;
  let fixture: ComponentFixture<SpectroscopyRsrcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpectroscopyRsrcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpectroscopyRsrcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VocsInWaterComponent } from './vocs-in-water.component';

describe('VocsInWaterComponent', () => {
  let component: VocsInWaterComponent;
  let fixture: ComponentFixture<VocsInWaterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VocsInWaterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VocsInWaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

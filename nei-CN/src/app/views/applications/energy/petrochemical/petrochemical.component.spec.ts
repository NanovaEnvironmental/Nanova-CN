import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetrochemicalComponent } from './petrochemical.component';

describe('PetrochemicalComponent', () => {
  let component: PetrochemicalComponent;
  let fixture: ComponentFixture<PetrochemicalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetrochemicalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PetrochemicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

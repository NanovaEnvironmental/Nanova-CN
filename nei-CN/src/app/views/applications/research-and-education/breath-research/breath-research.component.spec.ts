import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreathResearchComponent } from './breath-research.component';

describe('BreathResearchComponent', () => {
  let component: BreathResearchComponent;
  let fixture: ComponentFixture<BreathResearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreathResearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BreathResearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

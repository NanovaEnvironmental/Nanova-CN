import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqsP300Component } from './faqs-p300.component';

describe('FaqsP300Component', () => {
  let component: FaqsP300Component;
  let fixture: ComponentFixture<FaqsP300Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaqsP300Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FaqsP300Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

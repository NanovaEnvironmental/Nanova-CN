import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqsP100Component } from './faqs-p100.component';

describe('FaqsP100Component', () => {
  let component: FaqsP100Component;
  let fixture: ComponentFixture<FaqsP100Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaqsP100Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FaqsP100Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

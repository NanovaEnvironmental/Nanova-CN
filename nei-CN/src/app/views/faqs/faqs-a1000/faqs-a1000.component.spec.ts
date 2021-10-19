import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqsA1000Component } from './faqs-a1000.component';

describe('FaqsA1000Component', () => {
  let component: FaqsA1000Component;
  let fixture: ComponentFixture<FaqsA1000Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaqsA1000Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FaqsA1000Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

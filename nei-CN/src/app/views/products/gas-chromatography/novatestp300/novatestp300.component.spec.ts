import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Novatestp300Component } from './novatestp300.component';

describe('Novatestp300Component', () => {
  let component: Novatestp300Component;
  let fixture: ComponentFixture<Novatestp300Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Novatestp300Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Novatestp300Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

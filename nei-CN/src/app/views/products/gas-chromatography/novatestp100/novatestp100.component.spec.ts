import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Novatestp100Component } from './novatestp100.component';

describe('Novatestp100Component', () => {
  let component: Novatestp100Component;
  let fixture: ComponentFixture<Novatestp100Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Novatestp100Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Novatestp100Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

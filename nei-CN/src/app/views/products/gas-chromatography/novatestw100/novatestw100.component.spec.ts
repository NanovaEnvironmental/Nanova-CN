import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Novatestw100Component } from './novatestw100.component';

describe('Novatestw100Component', () => {
  let component: Novatestw100Component;
  let fixture: ComponentFixture<Novatestw100Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Novatestw100Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Novatestw100Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

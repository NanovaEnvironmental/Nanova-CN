import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OdorComponent } from './odor.component';

describe('OdorComponent', () => {
  let component: OdorComponent;
  let fixture: ComponentFixture<OdorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OdorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OdorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

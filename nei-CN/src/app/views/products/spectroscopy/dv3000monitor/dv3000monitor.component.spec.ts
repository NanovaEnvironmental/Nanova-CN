import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dv3000monitorComponent } from './dv3000monitor.component';

describe('Dv3000monitorComponent', () => {
  let component: Dv3000monitorComponent;
  let fixture: ComponentFixture<Dv3000monitorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Dv3000monitorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Dv3000monitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

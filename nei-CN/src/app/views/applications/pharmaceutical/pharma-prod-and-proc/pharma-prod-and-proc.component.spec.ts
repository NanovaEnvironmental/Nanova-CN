import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmaProdAndProcComponent } from './pharma-prod-and-proc.component';

describe('PharmaProdAndProcComponent', () => {
  let component: PharmaProdAndProcComponent;
  let fixture: ComponentFixture<PharmaProdAndProcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PharmaProdAndProcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PharmaProdAndProcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

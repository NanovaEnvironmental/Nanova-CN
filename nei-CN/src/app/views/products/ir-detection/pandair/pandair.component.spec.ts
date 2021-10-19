import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PandairComponent } from './pandair.component';

describe('PandairComponent', () => {
  let component: PandairComponent;
  let fixture: ComponentFixture<PandairComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PandairComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PandairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

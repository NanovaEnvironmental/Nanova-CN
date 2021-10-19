import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotfindSirComponent } from './hotfind-sir.component';

describe('HotfindSirComponent', () => {
  let component: HotfindSirComponent;
  let fixture: ComponentFixture<HotfindSirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotfindSirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HotfindSirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

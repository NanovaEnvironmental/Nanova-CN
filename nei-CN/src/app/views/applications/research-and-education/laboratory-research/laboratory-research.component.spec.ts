import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaboratoryResearchComponent } from './laboratory-research.component';

describe('LaboratoryResearchComponent', () => {
  let component: LaboratoryResearchComponent;
  let fixture: ComponentFixture<LaboratoryResearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaboratoryResearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaboratoryResearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

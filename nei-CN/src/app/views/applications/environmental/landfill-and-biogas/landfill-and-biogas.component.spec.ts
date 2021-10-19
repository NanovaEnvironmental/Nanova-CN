import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandfillAndBiogasComponent } from './landfill-and-biogas.component';

describe('LandfillAndBiogasComponent', () => {
  let component: LandfillAndBiogasComponent;
  let fixture: ComponentFixture<LandfillAndBiogasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandfillAndBiogasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandfillAndBiogasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

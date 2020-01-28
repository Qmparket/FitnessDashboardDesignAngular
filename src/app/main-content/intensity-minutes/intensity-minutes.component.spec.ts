import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntensityMinutesComponent } from './intensity-minutes.component';

describe('IntensityMinutesComponent', () => {
  let component: IntensityMinutesComponent;
  let fixture: ComponentFixture<IntensityMinutesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntensityMinutesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntensityMinutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

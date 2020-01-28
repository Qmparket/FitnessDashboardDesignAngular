import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonOrangeOutlineComponent } from './button-orange-outline.component';

describe('ButtonOrangeOutlineComponent', () => {
  let component: ButtonOrangeOutlineComponent;
  let fixture: ComponentFixture<ButtonOrangeOutlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonOrangeOutlineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonOrangeOutlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgWithTextComponent } from './img-with-text.component';

describe('ImgWithTextComponent', () => {
  let component: ImgWithTextComponent;
  let fixture: ComponentFixture<ImgWithTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImgWithTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgWithTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

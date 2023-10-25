import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderTextHomeComponent } from './slider-text-home.component';

describe('SliderTextHomeComponent', () => {
  let component: SliderTextHomeComponent;
  let fixture: ComponentFixture<SliderTextHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SliderTextHomeComponent]
    });
    fixture = TestBed.createComponent(SliderTextHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

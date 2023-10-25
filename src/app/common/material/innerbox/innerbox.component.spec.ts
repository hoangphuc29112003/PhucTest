import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InnerboxComponent } from './innerbox.component';

describe('InnerboxComponent', () => {
  let component: InnerboxComponent;
  let fixture: ComponentFixture<InnerboxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InnerboxComponent]
    });
    fixture = TestBed.createComponent(InnerboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

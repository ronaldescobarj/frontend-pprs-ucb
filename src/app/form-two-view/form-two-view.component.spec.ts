import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTwoViewComponent } from './form-two-view.component';

describe('FormTwoViewComponent', () => {
  let component: FormTwoViewComponent;
  let fixture: ComponentFixture<FormTwoViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormTwoViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormTwoViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormOneViewComponent } from './form-one-view.component';

describe('FormOneViewComponent', () => {
  let component: FormOneViewComponent;
  let fixture: ComponentFixture<FormOneViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormOneViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormOneViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

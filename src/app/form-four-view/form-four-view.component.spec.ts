import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFourViewComponent } from './form-four-view.component';

describe('FormFourViewComponent', () => {
  let component: FormFourViewComponent;
  let fixture: ComponentFixture<FormFourViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormFourViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormFourViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

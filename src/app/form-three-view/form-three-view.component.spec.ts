import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormThreeViewComponent } from './form-three-view.component';

describe('FormThreeViewComponent', () => {
  let component: FormThreeViewComponent;
  let fixture: ComponentFixture<FormThreeViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormThreeViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormThreeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

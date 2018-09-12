import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvocatoriesViewComponent } from './convocatories-view.component';

describe('ConvocatoriesViewComponent', () => {
  let component: ConvocatoriesViewComponent;
  let fixture: ComponentFixture<ConvocatoriesViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConvocatoriesViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConvocatoriesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

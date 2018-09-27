import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarActionFormComponent } from './car-action-form.component';

describe('CarActionFormComponent', () => {
  let component: CarActionFormComponent;
  let fixture: ComponentFixture<CarActionFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarActionFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarActionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

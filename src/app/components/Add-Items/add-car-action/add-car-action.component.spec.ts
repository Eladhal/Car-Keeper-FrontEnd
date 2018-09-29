import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCarActionComponent } from './add-car-action.component';

describe('AddCarActionComponent', () => {
  let component: AddCarActionComponent;
  let fixture: ComponentFixture<AddCarActionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCarActionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCarActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

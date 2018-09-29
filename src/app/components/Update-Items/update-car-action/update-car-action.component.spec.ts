import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCarActionComponent } from './update-car-action.component';

describe('UpdateCarActionComponent', () => {
  let component: UpdateCarActionComponent;
  let fixture: ComponentFixture<UpdateCarActionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateCarActionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateCarActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarActionCardComponent } from './car-action-card.component';

describe('CarActionCardComponent', () => {
  let component: CarActionCardComponent;
  let fixture: ComponentFixture<CarActionCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarActionCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarActionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniCarCardComponent } from './mini-car-card.component';

describe('MiniCarCardComponent', () => {
  let component: MiniCarCardComponent;
  let fixture: ComponentFixture<MiniCarCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiniCarCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniCarCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

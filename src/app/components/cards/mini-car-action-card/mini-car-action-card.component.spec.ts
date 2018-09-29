import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniCarActionCardComponent } from './mini-car-action-card.component';

describe('MiniCarActionCardComponent', () => {
  let component: MiniCarActionCardComponent;
  let fixture: ComponentFixture<MiniCarActionCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiniCarActionCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniCarActionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

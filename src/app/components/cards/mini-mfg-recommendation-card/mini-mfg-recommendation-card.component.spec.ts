import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniMfgRecommendationCardComponent } from './mini-mfg-recommendation-card.component';

describe('MiniMfgRecommendationCardComponent', () => {
  let component: MiniMfgRecommendationCardComponent;
  let fixture: ComponentFixture<MiniMfgRecommendationCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiniMfgRecommendationCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniMfgRecommendationCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MfgRecommendationCardComponent } from './mfg-recommendation-card.component';

describe('MfgRecommendationCardComponent', () => {
  let component: MfgRecommendationCardComponent;
  let fixture: ComponentFixture<MfgRecommendationCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MfgRecommendationCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MfgRecommendationCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

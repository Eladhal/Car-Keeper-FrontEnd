import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MfgRecommendationsDashboardComponent } from './mfg-recommendations-dashboard.component';

describe('MfgRecommendationsDashboardComponent', () => {
  let component: MfgRecommendationsDashboardComponent;
  let fixture: ComponentFixture<MfgRecommendationsDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MfgRecommendationsDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MfgRecommendationsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

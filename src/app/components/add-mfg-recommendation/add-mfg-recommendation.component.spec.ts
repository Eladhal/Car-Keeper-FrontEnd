import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMfgRecommendationComponent } from './add-mfg-recommendation.component';

describe('AddMfgRecommendationComponent', () => {
  let component: AddMfgRecommendationComponent;
  let fixture: ComponentFixture<AddMfgRecommendationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMfgRecommendationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMfgRecommendationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

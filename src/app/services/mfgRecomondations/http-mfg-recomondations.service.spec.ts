import { TestBed, inject } from '@angular/core/testing';

import { HttpMfgRecommendationsService } from './http-mfg-recommendations.service';

describe('HttpMfgRecommendationsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpMfgRecommendationsService]
    });
  });

  it('should be created', inject([HttpMfgRecommendationsService], (service: HttpMfgRecommendationsService) => {
    expect(service).toBeTruthy();
  }));
});

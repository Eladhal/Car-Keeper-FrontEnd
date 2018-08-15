import { TestBed, inject } from '@angular/core/testing';

import { HttpMfgRecomondationsService } from './http-mfg-recomondations.service';

describe('HttpMfgRecomondationsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpMfgRecomondationsService]
    });
  });

  it('should be created', inject([HttpMfgRecomondationsService], (service: HttpMfgRecomondationsService) => {
    expect(service).toBeTruthy();
  }));
});

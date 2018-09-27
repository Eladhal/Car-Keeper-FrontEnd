import { TestBed, inject } from '@angular/core/testing';

import { CardCompFactService } from './card-comp-fact.service';

describe('CardCompFactService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CardCompFactService]
    });
  });

  it('should be created', inject([CardCompFactService], (service: CardCompFactService) => {
    expect(service).toBeTruthy();
  }));
});

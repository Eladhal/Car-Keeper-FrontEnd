import { TestBed, inject } from '@angular/core/testing';

import { FormCompFactoryService } from './form-comp-factory.service';

describe('FormCompFactoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FormCompFactoryService]
    });
  });

  it('should be created', inject([FormCompFactoryService], (service: FormCompFactoryService) => {
    expect(service).toBeTruthy();
  }));
});

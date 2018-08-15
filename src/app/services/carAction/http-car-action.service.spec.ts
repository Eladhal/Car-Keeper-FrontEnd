import { TestBed, inject } from '@angular/core/testing';

import { HttpCarActionService } from './http-car-action.service';

describe('HttpCarActionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpCarActionService]
    });
  });

  it('should be created', inject([HttpCarActionService], (service: HttpCarActionService) => {
    expect(service).toBeTruthy();
  }));
});

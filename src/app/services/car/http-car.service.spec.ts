import { TestBed, inject } from '@angular/core/testing';

import { HttpCarService } from './http-car.service';

describe('HttpCarService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpCarService]
    });
  });

  it('should be created', inject([HttpCarService], (service: HttpCarService) => {
    expect(service).toBeTruthy();
  }));
});

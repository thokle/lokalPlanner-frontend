import { TestBed, inject } from '@angular/core/testing';

import { PriceAskingService } from './price-asking.service';

describe('PriceAskingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PriceAskingService]
    });
  });

  it('should be created', inject([PriceAskingService], (service: PriceAskingService) => {
    expect(service).toBeTruthy();
  }));
});

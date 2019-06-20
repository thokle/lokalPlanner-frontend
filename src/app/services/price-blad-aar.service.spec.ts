import { TestBed, inject } from '@angular/core/testing';

import { PriceBladAarService } from './price-blad-aar.service';

describe('PriceBladAarService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PriceBladAarService]
    });
  });

  it('should be created', inject([PriceBladAarService], (service: PriceBladAarService) => {
    expect(service).toBeTruthy();
  }));
});

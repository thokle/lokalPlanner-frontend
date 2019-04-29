import { TestBed, inject } from '@angular/core/testing';

import { BladdaekningService } from './bladdaekning.service';

describe('BladdaekningService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BladdaekningService]
    });
  });

  it('should be created', inject([BladdaekningService], (service: BladdaekningService) => {
    expect(service).toBeTruthy();
  }));
});

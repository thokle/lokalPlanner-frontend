import { TestBed, inject } from '@angular/core/testing';

import { BladtilaegService } from './bladtilaeg.service';

describe('BladtilaegService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BladtilaegService]
    });
  });

  it('should be created', inject([BladtilaegService], (service: BladtilaegService) => {
    expect(service).toBeTruthy();
  }));
});

import { TestBed, inject } from '@angular/core/testing';

import { StamdataService } from './stamdata.service';

describe('StamdataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StamdataService]
    });
  });

  it('should be created', inject([StamdataService], (service: StamdataService) => {
    expect(service).toBeTruthy();
  }));
});

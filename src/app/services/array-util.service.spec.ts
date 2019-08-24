import { TestBed, inject } from '@angular/core/testing';

import { ArrayUtilService } from './array-util.service';

describe('ArrayUtilService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ArrayUtilService]
    });
  });

  it('should be created', inject([ArrayUtilService], (service: ArrayUtilService) => {
    expect(service).toBeTruthy();
  }));
});

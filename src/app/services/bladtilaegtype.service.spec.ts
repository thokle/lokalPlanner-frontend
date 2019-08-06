import { TestBed, inject } from '@angular/core/testing';

import { BladtilaegtypeService } from './bladtilaegtype.service';

describe('BladtilaegtypeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BladtilaegtypeService]
    });
  });

  it('should be created', inject([BladtilaegtypeService], (service: BladtilaegtypeService) => {
    expect(service).toBeTruthy();
  }));
});

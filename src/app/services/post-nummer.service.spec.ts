import { TestBed, inject } from '@angular/core/testing';

import { PostNummerService } from './post-nummer.service';

describe('PostNummerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PostNummerService]
    });
  });

  it('should be created', inject([PostNummerService], (service: PostNummerService) => {
    expect(service).toBeTruthy();
  }));
});

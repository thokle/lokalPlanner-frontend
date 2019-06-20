import { TestBed, inject } from '@angular/core/testing';

import { UdsendingkontakterService } from './udsendingkontakter.service';

describe('UdsendingkontakterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UdsendingkontakterService]
    });
  });

  it('should be created', inject([UdsendingkontakterService], (service: UdsendingkontakterService) => {
    expect(service).toBeTruthy();
  }));
});

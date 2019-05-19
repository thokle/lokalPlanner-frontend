import { TestBed, inject } from '@angular/core/testing';

import { EjerforholdService } from './ejerforhold.service';

describe('EjerforholdService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EjerforholdService]
    });
  });

  it('should be created', inject([EjerforholdService], (service: EjerforholdService) => {
    expect(service).toBeTruthy();
  }));
});

import { TestBed, inject } from '@angular/core/testing';

import { AktiveaviserService } from './aktiveaviser.service';

describe('AktiveaviserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AktiveaviserService]
    });
  });

  it('should be created', inject([AktiveaviserService], (service: AktiveaviserService) => {
    expect(service).toBeTruthy();
  }));
});

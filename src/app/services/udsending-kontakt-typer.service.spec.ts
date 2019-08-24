import { TestBed, inject } from '@angular/core/testing';

import { UdsendingKontaktTyperService } from './udsending-kontakt-typer.service';

describe('UdsendingKontaktTyperService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UdsendingKontaktTyperService]
    });
  });

  it('should be created', inject([UdsendingKontaktTyperService], (service: UdsendingKontaktTyperService) => {
    expect(service).toBeTruthy();
  }));
});

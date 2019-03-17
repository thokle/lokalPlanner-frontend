import { TestBed, inject } from '@angular/core/testing';

import { StamBladKontaktPersonService } from './stam-blad-kontakt-person.service';

describe('StamBladKontaktPersonService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StamBladKontaktPersonService]
    });
  });

  it('should be created', inject([StamBladKontaktPersonService], (service: StamBladKontaktPersonService) => {
    expect(service).toBeTruthy();
  }));
});

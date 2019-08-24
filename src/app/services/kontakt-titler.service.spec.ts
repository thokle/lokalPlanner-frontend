import { TestBed, inject } from '@angular/core/testing';

import { KontaktTitlerService } from './kontakt-titler.service';

describe('KontaktTitlerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KontaktTitlerService]
    });
  });

  it('should be created', inject([KontaktTitlerService], (service: KontaktTitlerService) => {
    expect(service).toBeTruthy();
  }));
});

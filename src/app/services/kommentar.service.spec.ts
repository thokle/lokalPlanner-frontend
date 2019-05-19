import { TestBed, inject } from '@angular/core/testing';

import { KommentarService } from './kommentar.service';

describe('KommentarService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KommentarService]
    });
  });

  it('should be created', inject([KommentarService], (service: KommentarService) => {
    expect(service).toBeTruthy();
  }));
});

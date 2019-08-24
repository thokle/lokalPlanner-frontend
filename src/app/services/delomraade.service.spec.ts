import { TestBed, inject } from '@angular/core/testing';

import { DelomraadeService } from './delomraade.service';

describe('DelomraadeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DelomraadeService]
    });
  });

  it('should be created', inject([DelomraadeService], (service: DelomraadeService) => {
    expect(service).toBeTruthy();
  }));
});

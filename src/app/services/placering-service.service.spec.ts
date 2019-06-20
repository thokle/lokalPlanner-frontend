import { TestBed, inject } from '@angular/core/testing';

import { PlaceringServiceService } from './placering-service.service';

describe('PlaceringServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlaceringServiceService]
    });
  });

  it('should be created', inject([PlaceringServiceService], (service: PlaceringServiceService) => {
    expect(service).toBeTruthy();
  }));
});

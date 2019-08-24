import { TestBed, inject } from '@angular/core/testing';

import { MediePlanAvisService } from './medie-plan-avis.service';

describe('MediePlanAvisService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MediePlanAvisService]
    });
  });

  it('should be created', inject([MediePlanAvisService], (service: MediePlanAvisService) => {
    expect(service).toBeTruthy();
  }));
});

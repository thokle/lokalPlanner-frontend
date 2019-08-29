import { TestBed } from '@angular/core/testing';

import { MediePlanNrService } from './medie-plan-nr.service';

describe('MediePlanNrService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MediePlanNrService = TestBed.get(MediePlanNrService);
    expect(service).toBeTruthy();
  });
});

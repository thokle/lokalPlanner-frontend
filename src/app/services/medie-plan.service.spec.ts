import { TestBed } from '@angular/core/testing';

import { MediePlanService } from './medie-plan.service';

describe('MediePlanService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MediePlanService = TestBed.get(MediePlanService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { MediePlanLinjerService } from './medie-plan-linjer.service';

describe('MediePlanLinjerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MediePlanLinjerService = TestBed.get(MediePlanLinjerService);
    expect(service).toBeTruthy();
  });
});

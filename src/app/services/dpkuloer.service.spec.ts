import { TestBed } from '@angular/core/testing';

import { DPKuloerService } from './dpkuloer.service';

describe('DPKuloerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DPKuloerService = TestBed.get(DPKuloerService);
    expect(service).toBeTruthy();
  });
});

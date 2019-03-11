import { TestBed, inject } from '@angular/core/testing';

import { DateSupplierService } from './date-supplier.service';

describe('DateSupplierService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DateSupplierService]
    });
  });

  it('should be created', inject([DateSupplierService], (service: DateSupplierService) => {
    expect(service).toBeTruthy();
  }));
});

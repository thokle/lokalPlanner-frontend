import { TestBed, async, inject } from '@angular/core/testing';

import { IsUSerGuard } from './is-user.guard';

describe('IsUSerGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IsUSerGuard]
    });
  });

  it('should ...', inject([IsUSerGuard], (guard: IsUSerGuard) => {
    expect(guard).toBeTruthy();
  }));
});

import { TestBed } from '@angular/core/testing';

import { MovePaperService } from './move-paper.service';

describe('MovePaperService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MovePaperService = TestBed.get(MovePaperService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { WebSqlService } from './web-sql.service';

describe('WebSqlService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WebSqlService = TestBed.get(WebSqlService);
    expect(service).toBeTruthy();
  });
});

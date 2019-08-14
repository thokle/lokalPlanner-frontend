import { TestBed, inject } from '@angular/core/testing';

import { JsonUtilService } from './json-util.service';

describe('JsonUtilService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JsonUtilService]
    });
  });

  it('should be created', inject([JsonUtilService], (service: JsonUtilService) => {
    expect(service).toBeTruthy();
  }));
});

import { TestBed } from '@angular/core/testing';

import { StandortService } from './standort.service';

describe('StandortService', () => {
  let service: StandortService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StandortService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

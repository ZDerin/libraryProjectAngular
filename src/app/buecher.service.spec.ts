import { TestBed } from '@angular/core/testing';

import { BuecherService } from './buecher.service';

describe('BuecherService', () => {
  let service: BuecherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuecherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

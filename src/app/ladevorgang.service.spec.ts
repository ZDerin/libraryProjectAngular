import { TestBed } from '@angular/core/testing';

import { LadevorgangService } from './ladevorgang.service';

describe('LadevorgangService', () => {
  let service: LadevorgangService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LadevorgangService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

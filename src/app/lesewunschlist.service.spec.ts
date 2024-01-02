import { TestBed } from '@angular/core/testing';

import { LesewunschlistService } from './lesewunschlist.service';

describe('LesewunschlisteService', () => {
  let service: LesewunschlistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LesewunschlistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

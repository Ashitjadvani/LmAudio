import { TestBed } from '@angular/core/testing';

import { QuotService } from './quot.service';

describe('QuotService', () => {
  let service: QuotService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuotService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

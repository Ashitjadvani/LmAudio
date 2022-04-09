import { TestBed } from '@angular/core/testing';

import { CustomerFormGuard } from './customer-form.guard';

describe('CustomerFormGuard', () => {
  let guard: CustomerFormGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CustomerFormGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

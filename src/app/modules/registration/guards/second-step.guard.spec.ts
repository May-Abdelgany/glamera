import { TestBed } from '@angular/core/testing';

import { SecondStepGuard } from './second-step.guard';

describe('SecondStepGuard', () => {
  let guard: SecondStepGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SecondStepGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

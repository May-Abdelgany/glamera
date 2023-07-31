import { TestBed } from '@angular/core/testing';

import { ThirdStepGuard } from './third-step.guard';

describe('ThirdStepGuard', () => {
  let guard: ThirdStepGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ThirdStepGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

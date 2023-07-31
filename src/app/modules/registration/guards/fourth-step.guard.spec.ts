import { TestBed } from '@angular/core/testing';

import { FourthStepGuard } from './fourth-step.guard';

describe('FourthStepGuard', () => {
  let guard: FourthStepGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(FourthStepGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { AllAppsService } from './all-apps.service';

describe('AllAppsService', () => {
  let service: AllAppsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllAppsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

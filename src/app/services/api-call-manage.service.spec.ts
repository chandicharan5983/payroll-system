import { TestBed } from '@angular/core/testing';

import { ApiCallManageService } from './api-call-manage.service';

describe('ApiCallManageService', () => {
  let service: ApiCallManageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiCallManageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

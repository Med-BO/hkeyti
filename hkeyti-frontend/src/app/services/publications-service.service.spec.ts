import { TestBed } from '@angular/core/testing';

import { PublicationsServiceService } from './publications-service.service';

describe('PublicationsServiceService', () => {
  let service: PublicationsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PublicationsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

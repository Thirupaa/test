import { TestBed, inject } from '@angular/core/testing';

import { CommomserviceService } from './commomservice.service';

describe('CommomserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CommomserviceService]
    });
  });

  it('should be created', inject([CommomserviceService], (service: CommomserviceService) => {
    expect(service).toBeTruthy();
  }));
});

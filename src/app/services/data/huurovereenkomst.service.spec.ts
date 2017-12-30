import { TestBed, inject } from '@angular/core/testing';

import { HuurovereenkomstService } from './huurovereenkomst.service';

describe('HuurovereenkomstService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HuurovereenkomstService]
    });
  });

  it('should be created', inject([HuurovereenkomstService], (service: HuurovereenkomstService) => {
    expect(service).toBeTruthy();
  }));
});

import { TestBed, inject } from '@angular/core/testing';

import { KlantService } from './klant.service';

describe('KlantService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KlantService]
    });
  });

  it('should be created', inject([KlantService], (service: KlantService) => {
    expect(service).toBeTruthy();
  }));
});

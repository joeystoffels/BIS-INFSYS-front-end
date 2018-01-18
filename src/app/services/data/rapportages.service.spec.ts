import { TestBed, inject } from '@angular/core/testing';

import { RapportagesService } from './rapportages.service';

describe('RapportagesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RapportagesService]
    });
  });

  it('should be created', inject([RapportagesService], (service: RapportagesService) => {
    expect(service).toBeTruthy();
  }));
});

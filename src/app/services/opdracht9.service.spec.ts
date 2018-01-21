import { TestBed, inject } from '@angular/core/testing';

import { Opdracht9Service } from './opdracht9.service';

describe('Opdracht9Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Opdracht9Service]
    });
  });

  it('should be created', inject([Opdracht9Service], (service: Opdracht9Service) => {
    expect(service).toBeTruthy();
  }));
});

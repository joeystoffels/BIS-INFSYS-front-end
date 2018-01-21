import { TestBed, inject } from '@angular/core/testing';

import { Opdracht8Service } from './opdracht8.service';

describe('Opdracht8Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Opdracht8Service]
    });
  });

  it('should be created', inject([Opdracht8Service], (service: Opdracht8Service) => {
    expect(service).toBeTruthy();
  }));
});

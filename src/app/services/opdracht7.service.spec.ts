import { TestBed, inject } from '@angular/core/testing';

import { Opdracht7Service } from './opdracht7.service';

describe('Opdracht7Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Opdracht7Service]
    });
  });

  it('should be created', inject([Opdracht7Service], (service: Opdracht7Service) => {
    expect(service).toBeTruthy();
  }));
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Opdracht8Component } from './opdracht8.component';

describe('Opdracht8Component', () => {
  let component: Opdracht8Component;
  let fixture: ComponentFixture<Opdracht8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Opdracht8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Opdracht8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

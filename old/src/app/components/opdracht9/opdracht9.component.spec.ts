import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Opdracht9Component } from './opdracht9.component';

describe('Opdracht9Component', () => {
  let component: Opdracht9Component;
  let fixture: ComponentFixture<Opdracht9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Opdracht9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Opdracht9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

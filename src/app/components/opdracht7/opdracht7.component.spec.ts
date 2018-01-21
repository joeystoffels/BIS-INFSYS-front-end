import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Opdracht7Component } from './opdracht7.component';

describe('Opdracht7Component', () => {
  let component: Opdracht7Component;
  let fixture: ComponentFixture<Opdracht7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Opdracht7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Opdracht7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

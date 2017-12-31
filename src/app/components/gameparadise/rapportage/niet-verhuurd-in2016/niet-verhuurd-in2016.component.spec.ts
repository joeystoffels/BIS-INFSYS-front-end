import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NietVerhuurdIn2016Component } from './niet-verhuurd-in2016.component';

describe('NietVerhuurdIn2016Component', () => {
  let component: NietVerhuurdIn2016Component;
  let fixture: ComponentFixture<NietVerhuurdIn2016Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NietVerhuurdIn2016Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NietVerhuurdIn2016Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

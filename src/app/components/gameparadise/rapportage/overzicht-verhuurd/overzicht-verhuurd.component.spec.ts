import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverzichtVerhuurdComponent } from './overzicht-verhuurd.component';

describe('OverzichtVerhuurdComponent', () => {
  let component: OverzichtVerhuurdComponent;
  let fixture: ComponentFixture<OverzichtVerhuurdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverzichtVerhuurdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverzichtVerhuurdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

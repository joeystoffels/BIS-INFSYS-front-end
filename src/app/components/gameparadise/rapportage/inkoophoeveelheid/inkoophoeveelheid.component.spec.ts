import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InkoophoeveelheidComponent } from './inkoophoeveelheid.component';

describe('InkoophoeveelheidComponent', () => {
  let component: InkoophoeveelheidComponent;
  let fixture: ComponentFixture<InkoophoeveelheidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InkoophoeveelheidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InkoophoeveelheidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

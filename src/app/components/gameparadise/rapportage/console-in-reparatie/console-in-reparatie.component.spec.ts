import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsoleInReparatieComponent } from './console-in-reparatie.component';

describe('ConsoleInReparatieComponent', () => {
  let component: ConsoleInReparatieComponent;
  let fixture: ComponentFixture<ConsoleInReparatieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsoleInReparatieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsoleInReparatieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OmzettenComponent } from './omzetten.component';

describe('OmzettenComponent', () => {
  let component: OmzettenComponent;
  let fixture: ComponentFixture<OmzettenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OmzettenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OmzettenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

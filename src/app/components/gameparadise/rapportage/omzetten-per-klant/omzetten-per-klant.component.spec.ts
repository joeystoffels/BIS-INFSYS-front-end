import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OmzettenPerKlantComponent } from './omzetten-per-klant.component';

describe('OmzettenPerKlantComponent', () => {
  let component: OmzettenPerKlantComponent;
  let fixture: ComponentFixture<OmzettenPerKlantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OmzettenPerKlantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OmzettenPerKlantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

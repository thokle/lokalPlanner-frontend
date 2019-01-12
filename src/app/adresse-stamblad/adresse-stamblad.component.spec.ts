import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdresseStambladComponent } from './adresse-stamblad.component';

describe('AdresseStambladComponent', () => {
  let component: AdresseStambladComponent;
  let fixture: ComponentFixture<AdresseStambladComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdresseStambladComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdresseStambladComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StamBladOverSigtComponent } from './stam-blad-over-sigt.component';

describe('StamBladOverSigtComponent', () => {
  let component: StamBladOverSigtComponent;
  let fixture: ComponentFixture<StamBladOverSigtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StamBladOverSigtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StamBladOverSigtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

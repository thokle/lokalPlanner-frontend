import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StamBladComponent } from './stam-blad.component';

describe('StamBladComponent', () => {
  let component: StamBladComponent;
  let fixture: ComponentFixture<StamBladComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StamBladComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StamBladComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

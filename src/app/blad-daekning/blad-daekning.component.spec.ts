import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BladDaekningComponent } from './blad-daekning.component';

describe('BladDaekningComponent', () => {
  let component: BladDaekningComponent;
  let fixture: ComponentFixture<BladDaekningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BladDaekningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BladDaekningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

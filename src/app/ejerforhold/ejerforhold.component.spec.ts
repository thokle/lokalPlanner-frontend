import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EjerforholdComponent } from './ejerforhold.component';

describe('EjerforholdComponent', () => {
  let component: EjerforholdComponent;
  let fixture: ComponentFixture<EjerforholdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EjerforholdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EjerforholdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

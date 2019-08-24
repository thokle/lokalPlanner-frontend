import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UdsendingkontaktertableComponent } from './udsendingkontaktertable.component';

describe('UdsendingkontaktertableComponent', () => {
  let component: UdsendingkontaktertableComponent;
  let fixture: ComponentFixture<UdsendingkontaktertableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UdsendingkontaktertableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UdsendingkontaktertableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UdsendingkontakterDialogComponent } from './udsendingkontakter-dialog.component';

describe('UdsendingkontakterDialogComponent', () => {
  let component: UdsendingkontakterDialogComponent;
  let fixture: ComponentFixture<UdsendingkontakterDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UdsendingkontakterDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UdsendingkontakterDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

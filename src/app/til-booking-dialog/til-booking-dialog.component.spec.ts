import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TilBookingDialogComponent } from './til-booking-dialog.component';

describe('TilBookingDialogComponent', () => {
  let component: TilBookingDialogComponent;
  let fixture: ComponentFixture<TilBookingDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TilBookingDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TilBookingDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

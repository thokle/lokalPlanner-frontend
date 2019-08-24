import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceListPositionDialogComponent } from './price-list-position-dialog.component';

describe('PriceListPositionDialogComponent', () => {
  let component: PriceListPositionDialogComponent;
  let fixture: ComponentFixture<PriceListPositionDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PriceListPositionDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceListPositionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

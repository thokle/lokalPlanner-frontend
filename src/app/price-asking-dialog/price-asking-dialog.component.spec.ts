import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceAskingDialogComponent } from './price-asking-dialog.component';

describe('PriceAskingDialogComponent', () => {
  let component: PriceAskingDialogComponent;
  let fixture: ComponentFixture<PriceAskingDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PriceAskingDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceAskingDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

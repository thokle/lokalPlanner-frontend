import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceWeeTypeDialogComponent } from './price-wee-type-dialog.component';

describe('PriceWeeTypeDialogComponent', () => {
  let component: PriceWeeTypeDialogComponent;
  let fixture: ComponentFixture<PriceWeeTypeDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PriceWeeTypeDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceWeeTypeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

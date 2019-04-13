import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceAskingComponent } from './price-asking.component';

describe('PriceAskingComponent', () => {
  let component: PriceAskingComponent;
  let fixture: ComponentFixture<PriceAskingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PriceAskingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceAskingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

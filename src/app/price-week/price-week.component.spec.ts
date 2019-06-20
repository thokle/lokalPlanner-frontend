import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceWeekComponent } from './price-week.component';

describe('PriceWeekComponent', () => {
  let component: PriceWeekComponent;
  let fixture: ComponentFixture<PriceWeekComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PriceWeekComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceWeekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

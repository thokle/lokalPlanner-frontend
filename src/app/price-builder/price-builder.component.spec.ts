import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceBuilderComponent } from './price-builder.component';

describe('PriceBuilderComponent', () => {
  let component: PriceBuilderComponent;
  let fixture: ComponentFixture<PriceBuilderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PriceBuilderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ByselectComponent } from './byselect.component';

describe('ByselectComponent', () => {
  let component: ByselectComponent;
  let fixture: ComponentFixture<ByselectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ByselectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ByselectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BladtilLaegsComponent } from './bladtil-laegs.component';

describe('BladtilLaegsComponent', () => {
  let component: BladtilLaegsComponent;
  let fixture: ComponentFixture<BladtilLaegsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BladtilLaegsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BladtilLaegsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

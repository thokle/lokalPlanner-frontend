import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BladtilLaegstypeComponent } from './bladtil-laegstype.component';

describe('BladtilLaegstypeComponent', () => {
  let component: BladtilLaegstypeComponent;
  let fixture: ComponentFixture<BladtilLaegstypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BladtilLaegstypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BladtilLaegstypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

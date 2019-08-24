import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BladtilLaegsDialogComponent } from './bladtil-laegs-dialog.component';

describe('BladtilLaegsDialogComponent', () => {
  let component: BladtilLaegsDialogComponent;
  let fixture: ComponentFixture<BladtilLaegsDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BladtilLaegsDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BladtilLaegsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

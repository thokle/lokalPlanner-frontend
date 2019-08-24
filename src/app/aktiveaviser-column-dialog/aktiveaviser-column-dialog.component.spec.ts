import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AktiveaviserColumnDialogComponent } from './aktiveaviser-column-dialog.component';

describe('AktiveaviserColumnDialogComponent', () => {
  let component: AktiveaviserColumnDialogComponent;
  let fixture: ComponentFixture<AktiveaviserColumnDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AktiveaviserColumnDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AktiveaviserColumnDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

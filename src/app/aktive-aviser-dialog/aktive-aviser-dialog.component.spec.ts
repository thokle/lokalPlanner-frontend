import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AktiveAviserDialogComponent } from './aktive-aviser-dialog.component';

describe('AktiveAviserDialogComponent', () => {
  let component: AktiveAviserDialogComponent;
  let fixture: ComponentFixture<AktiveAviserDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AktiveAviserDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AktiveAviserDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

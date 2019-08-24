import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeakningKortDialogComponent } from './deakning-kort-dialog.component';

describe('DeakningKortDialogComponent', () => {
  let component: DeakningKortDialogComponent;
  let fixture: ComponentFixture<DeakningKortDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeakningKortDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeakningKortDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

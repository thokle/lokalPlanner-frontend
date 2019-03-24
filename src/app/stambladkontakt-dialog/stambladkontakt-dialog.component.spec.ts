import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StambladkontaktDialogComponent } from './stambladkontakt-dialog.component';

describe('StambladkontaktDialogComponent', () => {
  let component: StambladkontaktDialogComponent;
  let fixture: ComponentFixture<StambladkontaktDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StambladkontaktDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StambladkontaktDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

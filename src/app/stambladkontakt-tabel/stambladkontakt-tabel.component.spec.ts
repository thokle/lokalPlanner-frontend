import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StambladkontaktTabelComponent } from './stambladkontakt-tabel.component';

describe('StambladkontaktTabelComponent', () => {
  let component: StambladkontaktTabelComponent;
  let fixture: ComponentFixture<StambladkontaktTabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StambladkontaktTabelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StambladkontaktTabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

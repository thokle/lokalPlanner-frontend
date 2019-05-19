import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BladkommentarComponent } from './bladkommentar.component';

describe('BladkommentarComponent', () => {
  let component: BladkommentarComponent;
  let fixture: ComponentFixture<BladkommentarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BladkommentarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BladkommentarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

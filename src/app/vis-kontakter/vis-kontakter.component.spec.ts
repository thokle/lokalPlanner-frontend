import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisKontakterComponent } from './vis-kontakter.component';

describe('VisKontakterComponent', () => {
  let component: VisKontakterComponent;
  let fixture: ComponentFixture<VisKontakterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisKontakterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisKontakterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

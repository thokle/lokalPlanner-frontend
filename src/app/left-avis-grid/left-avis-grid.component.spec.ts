import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftAvisGridComponent } from './left-avis-grid.component';

describe('LeftAvisGridComponent', () => {
  let component: LeftAvisGridComponent;
  let fixture: ComponentFixture<LeftAvisGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeftAvisGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftAvisGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

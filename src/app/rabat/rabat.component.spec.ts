import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RabatComponent } from './rabat.component';

describe('RabatComponent', () => {
  let component: RabatComponent;
  let fixture: ComponentFixture<RabatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RabatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RabatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

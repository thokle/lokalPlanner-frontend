import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BogholderiComponent } from './bogholderi.component';

describe('BogholderiComponent', () => {
  let component: BogholderiComponent;
  let fixture: ComponentFixture<BogholderiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BogholderiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BogholderiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

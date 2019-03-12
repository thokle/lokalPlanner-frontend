import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KomtaktPersonComponent } from './komtakt-person.component';

describe('KomtaktPersonComponent', () => {
  let component: KomtaktPersonComponent;
  let fixture: ComponentFixture<KomtaktPersonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KomtaktPersonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KomtaktPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

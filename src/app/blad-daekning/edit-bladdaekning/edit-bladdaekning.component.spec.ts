import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBladdaekningComponent } from './edit-bladdaekning.component';

describe('EditBladdaekningComponent', () => {
  let component: EditBladdaekningComponent;
  let fixture: ComponentFixture<EditBladdaekningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditBladdaekningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditBladdaekningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

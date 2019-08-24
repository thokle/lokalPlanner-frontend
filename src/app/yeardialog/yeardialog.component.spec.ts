import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YeardialogComponent } from './yeardialog.component';

describe('YeardialogComponent', () => {
  let component: YeardialogComponent;
  let fixture: ComponentFixture<YeardialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YeardialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YeardialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

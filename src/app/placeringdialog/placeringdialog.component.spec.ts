import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceringdialogComponent } from './placeringdialog.component';

describe('PlaceringdialogComponent', () => {
  let component: PlaceringdialogComponent;
  let fixture: ComponentFixture<PlaceringdialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaceringdialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceringdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

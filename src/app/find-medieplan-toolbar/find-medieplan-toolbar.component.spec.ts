import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindMedieplanToolbarComponent } from './find-medieplan-toolbar.component';

describe('FindMedieplanToolbarComponent', () => {
  let component: FindMedieplanToolbarComponent;
  let fixture: ComponentFixture<FindMedieplanToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindMedieplanToolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindMedieplanToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

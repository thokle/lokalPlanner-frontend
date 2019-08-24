import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindMedieplanComponent } from './find-medieplan.component';

describe('FindMedieplanComponent', () => {
  let component: FindMedieplanComponent;
  let fixture: ComponentFixture<FindMedieplanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindMedieplanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindMedieplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

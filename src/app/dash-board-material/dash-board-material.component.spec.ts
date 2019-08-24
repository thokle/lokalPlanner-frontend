import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashBoardMaterialComponent } from './dash-board-material.component';

describe('DashBoardMaterialComponent', () => {
  let component: DashBoardMaterialComponent;
  let fixture: ComponentFixture<DashBoardMaterialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashBoardMaterialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashBoardMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

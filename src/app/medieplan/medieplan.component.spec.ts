import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedieplanComponent } from './medieplan.component';

describe('MedieplanComponent', () => {
  let component: MedieplanComponent;
  let fixture: ComponentFixture<MedieplanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedieplanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedieplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

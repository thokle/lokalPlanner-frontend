import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedieplanAvisTableComponent } from './medieplan-avis-table.component';

describe('MedieplanAvisTableComponent', () => {
  let component: MedieplanAvisTableComponent;
  let fixture: ComponentFixture<MedieplanAvisTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedieplanAvisTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedieplanAvisTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

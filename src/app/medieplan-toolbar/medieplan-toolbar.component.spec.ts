import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedieplanToolbarComponent } from './medieplan-toolbar.component';

describe('MedieplanToolbarComponent', () => {
  let component: MedieplanToolbarComponent;
  let fixture: ComponentFixture<MedieplanToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedieplanToolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedieplanToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

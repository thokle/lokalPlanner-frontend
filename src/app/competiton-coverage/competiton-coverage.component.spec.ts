import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetitonCoverageComponent } from './competiton-coverage.component';

describe('CompetitonCoverageComponent', () => {
  let component: CompetitonCoverageComponent;
  let fixture: ComponentFixture<CompetitonCoverageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompetitonCoverageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetitonCoverageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

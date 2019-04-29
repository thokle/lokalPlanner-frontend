import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EjerforholdTableComponent } from './ejerforhold-table.component';

describe('EjerforholdTableComponent', () => {
  let component: EjerforholdTableComponent;
  let fixture: ComponentFixture<EjerforholdTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EjerforholdTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EjerforholdTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

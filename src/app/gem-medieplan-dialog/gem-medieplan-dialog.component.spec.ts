import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GemMedieplanDialogComponent } from './gem-medieplan-dialog.component';

describe('GemMedieplanDialogComponent', () => {
  let component: GemMedieplanDialogComponent;
  let fixture: ComponentFixture<GemMedieplanDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GemMedieplanDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GemMedieplanDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

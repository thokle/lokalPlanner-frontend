import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StambladPaginatorComponent } from './stamblad-paginator.component';

describe('StambladPaginatorComponent', () => {
  let component: StambladPaginatorComponent;
  let fixture: ComponentFixture<StambladPaginatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StambladPaginatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StambladPaginatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

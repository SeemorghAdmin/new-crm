import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UniReportsInfoModalComponent } from './uni-reports-info-modal.component';

describe('UniReportsInfoModalComponent', () => {
  let component: UniReportsInfoModalComponent;
  let fixture: ComponentFixture<UniReportsInfoModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UniReportsInfoModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UniReportsInfoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UniStatusLogModalComponent } from './uni-status-log-modal.component';

describe('UniStatusLogModalComponent', () => {
  let component: UniStatusLogModalComponent;
  let fixture: ComponentFixture<UniStatusLogModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UniStatusLogModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UniStatusLogModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

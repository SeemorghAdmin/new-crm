import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UniServiceRequstComponent } from './uni-service-requst.component';

describe('UniServiceRequstComponent', () => {
  let component: UniServiceRequstComponent;
  let fixture: ComponentFixture<UniServiceRequstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UniServiceRequstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UniServiceRequstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

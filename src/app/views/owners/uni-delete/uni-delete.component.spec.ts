import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UniDeleteComponent } from './uni-delete.component';

describe('UniDeleteComponent', () => {
  let component: UniDeleteComponent;
  let fixture: ComponentFixture<UniDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UniDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UniDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

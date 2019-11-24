import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUniPreDataComponent } from './add-uni-pre-data.component';

describe('AddUniPreDataComponent', () => {
  let component: AddUniPreDataComponent;
  let fixture: ComponentFixture<AddUniPreDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddUniPreDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUniPreDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

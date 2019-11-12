import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowUniReportComponent } from './show-uni-report.component';

describe('ShowUniReportComponent', () => {
  let component: ShowUniReportComponent;
  let fixture: ComponentFixture<ShowUniReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowUniReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowUniReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

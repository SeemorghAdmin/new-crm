import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportSubsComponent } from './report-subs.component';

describe('ReportSubsComponent', () => {
  let component: ReportSubsComponent;
  let fixture: ComponentFixture<ReportSubsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportSubsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportSubsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

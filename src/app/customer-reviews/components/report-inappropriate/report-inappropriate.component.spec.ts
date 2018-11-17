import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportInappropriateComponent } from './report-inappropriate.component';

describe('ReportInappropriateComponent', () => {
  let component: ReportInappropriateComponent;
  let fixture: ComponentFixture<ReportInappropriateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportInappropriateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportInappropriateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

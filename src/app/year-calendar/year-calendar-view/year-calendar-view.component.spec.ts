import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YearCalendarViewComponent } from './year-calendar-view.component';

describe('YearCalendarViewComponent', () => {
  let component: YearCalendarViewComponent;
  let fixture: ComponentFixture<YearCalendarViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YearCalendarViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YearCalendarViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

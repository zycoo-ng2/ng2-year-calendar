import { Component, ViewChild } from '@angular/core';
import { YearCalendarViewComponent } from './year-calendar/year-calendar-view/year-calendar-view.component'
declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private clickDate: any;
  @ViewChild(YearCalendarViewComponent)
  private yearCalendar: YearCalendarViewComponent;
  public language = 'zh-cn';
  public dataSource = [
    {
      id: 0,
      startDate: new Date(2017, 1, 28),
      endDate: new Date(2017, 1, 28),
      amStartTime: '',
      amEndTime: '',
      pmStartTime: '',
      pmEndTime: '',
    }
  ];

  public clickDay(event) {
    ($('#editModal')).modal();
    this.clickDate = event.date;
  }
  public addNewDay() {
    this.dataSource.push(
      {
        id: 0,
        startDate: this.clickDate,
        endDate: this.clickDate,
        amStartTime: '',
        amEndTime: '',
        pmStartTime: '',
        pmEndTime: '',
      }
    );
    this.yearCalendar.updateDateSource(this.dataSource);
  }
  public renderEnd(event) {
  }
}

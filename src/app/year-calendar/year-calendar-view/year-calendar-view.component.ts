import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// import './bootstrap'
declare var $: any;
@Component({
  selector: 'app-year-calendar-view',
  templateUrl: './year-calendar-view.component.html',
  styleUrls: ['./year-calendar-view.component.css']
})
export class YearCalendarViewComponent implements OnInit {
  private _dataSource: any[];
  private _dateSourceTime: Number[];
  @Input() public language = 'en';

  @Output() public renderEnd: EventEmitter<any> = new EventEmitter();
  @Output() public clickDay: EventEmitter<any> = new EventEmitter();
  constructor() { }

  @Input()
  public set dataSource(data: any[]){
    this._dataSource = data.map((item) => {
      item.color = 'white';
      return item;
    });
    this._dateSourceTime = data.map((item ) => {
      return item.startDate.getTime();
    })
  }

  ngOnInit() {
    const currentYear = new Date().getFullYear();
    const options = {
      language: this.language,
      dataSource: this._dataSource,
      clickDay: (event, which, data) => {
        this.clickDay.emit(event);
      },
      renderEnd: (event) => {
        this.renderEnd.emit(event);
      },
      customDayRenderer: this.customDayRenderer
    };
    $('.calendar').calendar(options);
  }
  customDayRenderer = (element, date) => {
    if (this._dateSourceTime.indexOf(date.getTime())>=0) {
      $(element).css('background-color', 'red');
      $(element).css('color', 'white');
      $(element).css('border-radius', '15px');
    }
  }
  updateDateSource(data: any[]) {
     this._dataSource = data.map((item) => {
      item.color = 'white';
      return item;
    });
    this._dateSourceTime = data.map((item ) => {
      return item.startDate.getTime();
    })
    $('.calendar').data('calendar').setDataSource(this._dataSource);
  }
}

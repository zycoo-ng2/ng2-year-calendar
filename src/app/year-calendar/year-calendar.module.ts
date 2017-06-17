import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YearCalendarViewComponent } from './year-calendar-view/year-calendar-view.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [YearCalendarViewComponent],
  exports: [YearCalendarViewComponent]
})
export class YearCalendarModule { }

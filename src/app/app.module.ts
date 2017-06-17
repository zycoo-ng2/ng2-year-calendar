import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { YearCalendarModule } from './year-calendar/year-calendar.module'

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    YearCalendarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

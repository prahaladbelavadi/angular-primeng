import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { ButtonModule } from 'primeng/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PanelsComponent } from './panels/panels.component';
import {AccordionModule} from 'primeng/accordion';
import {CardModule} from 'primeng/card';
import {TabViewModule} from 'primeng/tabview';
import { CalendarComponent } from './calendar/calendar.component';
import {FullCalendarModule} from 'primeng/fullcalendar';



@NgModule({
  declarations: [
    AppComponent,
    PanelsComponent,
    CalendarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ButtonModule,
    AccordionModule,
    CardModule,
    TabViewModule,
    FullCalendarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

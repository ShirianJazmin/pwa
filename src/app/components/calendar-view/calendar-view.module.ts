import { NgModule } from '@angular/core';
import { CalendarViewComponent } from './calendar-view.component';
import { RouterModule } from '@angular/router';
import { calendarRoutes } from './calendar-view.routes';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [CalendarViewComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(calendarRoutes)
  ]
})
export class CalendarViewModule {}
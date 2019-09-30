import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimelineRoutingModule } from './timeline-routing.module';
import { TimelineComponent } from './timeline.component';
import { CreatePostTimelineComponent } from './components/create-post-timeline/create-post-timeline.component';
import { OwlDateTimeModule, OwlNativeDateTimeModule, OWL_DATE_TIME_LOCALE } from 'ng-pick-datetime';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [TimelineComponent, CreatePostTimelineComponent],
  imports: [
    CommonModule,
    TimelineRoutingModule,
    FormsModule ,
    SharedModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
  ],
  providers: [  {provide: OWL_DATE_TIME_LOCALE, useValue: 'en'},]
})
export class TimelineModule { }

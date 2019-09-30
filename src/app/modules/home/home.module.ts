import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { fakeBackendProvider } from 'src/app/core/interceptors/fake-backend.interceptor';
import { TimelineItemComponent } from './components/timeline-item/timeline-item.component';


@NgModule({
  declarations: [HomeComponent, TimelineItemComponent],
  
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }

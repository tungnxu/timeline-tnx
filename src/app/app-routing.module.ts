import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule) },
  { path: 'post', loadChildren: () => import('./modules/timeline/timeline.module').then(m => m.TimelineModule) },
  { path: 'post/:id', loadChildren: () => import('./modules/timeline/timeline.module').then(m => m.TimelineModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


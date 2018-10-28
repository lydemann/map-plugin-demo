import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DrawControlsRoutes } from './map/map-features/draw-controls/draw-controls.routing';
import { MapComponent } from './map/map.component';

const routes: Routes = [
  { path: '', redirectTo: 'map', pathMatch: 'full' },
  { path: 'map', component: MapComponent, children: [...DrawControlsRoutes] },
  { path: '**', redirectTo: '/map' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

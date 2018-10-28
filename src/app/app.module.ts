import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AngularOpenlayersModule } from 'ngx-openlayers';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { DrawControlsComponent } from './map/map-features/draw-controls/draw-controls.component';
import { MapComponent } from './map/map.component';


@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    DrawControlsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularOpenlayersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

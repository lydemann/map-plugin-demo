import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AngularOpenlayersModule } from 'ngx-openlayers';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { BasicComponent } from './basic/basic.component';
import { DrawControlsComponent } from './basic/draw-controls/draw-controls.component';
import { ClusterComponent } from './cluster/cluster.component';
import { RasterComponent } from './raster/raster.component';


@NgModule({
  declarations: [
    AppComponent,
    BasicComponent,
    ClusterComponent,
    RasterComponent,
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

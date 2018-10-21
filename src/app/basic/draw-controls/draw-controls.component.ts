import { Component, OnInit } from '@angular/core';
import { MapComponent, SourceVectorComponent } from 'ngx-openlayers';
import { geom, interaction } from 'openlayers';

@Component({
  selector: 'app-draw-controls',
  templateUrl: './draw-controls.component.html',
  styleUrls: ['./draw-controls.component.scss'],
})
export class DrawControlsComponent implements OnInit {

  drawInteraction: interaction.Draw;
  selectedDrawType: 'Point' | 'Polygon';

  constructor(private map: MapComponent, private mapSource: SourceVectorComponent) {
  }

  ngOnInit() {
  }

  drawPointSelected() {

    this.removeDrawInteraction();
    if (this.selectedDrawType === 'Point') {
      this.selectedDrawType = null;
      return;
    }

    const mapSource = this.mapSource.instance;
    this.drawInteraction = new interaction.Draw({ type: 'Point', source: mapSource });
    this.drawInteraction.on('drawend', (event) => this.endDrawing(event));
    this.map.instance.addInteraction(this.drawInteraction);

    this.selectedDrawType = 'Point';
  }

  drawPolygonSelected() {

    this.removeDrawInteraction();
    if (this.selectedDrawType === 'Polygon') {
      this.selectedDrawType = null;
      return;
    }

    const mapSource = this.mapSource.instance;
    this.drawInteraction = new interaction.Draw({ type: 'Polygon', source: mapSource });
    this.drawInteraction.on('drawend', (event) => this.endDrawing(event));
    this.map.instance.addInteraction(this.drawInteraction);

    this.selectedDrawType = 'Polygon';
  }

  private removeDrawInteraction() {
    if (this.drawInteraction) {
      this.map.instance.removeInteraction(this.drawInteraction);
    }
  }

  endDrawing(feat: any) {
    const polygon = feat.feature.getGeometry() as geom.Polygon;
    console.log(polygon.getCoordinates());
  }
}

import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-zoom-range',
  templateUrl: './zoom-range.component.html',
  styles: [
    `
      .mapa-container {
        height: 100%;
        width: 100%;
      }
      .row {
        background-color: white;
        border-radius: 5px;
        position: fixed;
        bottom: 50px;
        left: 20px;
        padding: 10px;
        z-index: 99999;
      }
    `,
  ],
})
export class ZoomRangeComponent implements OnInit {
  mapa!: mapboxgl.Map

  constructor() {}

  ngOnInit(): void {
    this.mapa = new mapboxgl.Map({
      container: 'mapa',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-77.05104603384511, -12.001413613755023],
      zoom: 15,
    });
  }

  zoomIn() {}
  zoomOut() {
    console.log('Zoom out');
    
  }
}

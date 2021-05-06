import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  ViewChild,
} from '@angular/core';
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
export class ZoomRangeComponent implements AfterViewInit, OnDestroy {
  @ViewChild('mapa') divMapa!: ElementRef; // Sirve para tomar un elemento HTML y usarlo como una propiedad común y corriente
  mapa!: mapboxgl.Map;
  zoomLevel: number = 10;
  center: [number, number] = [-77.05104603384511, -12.001413613755023];

  constructor() {}

  ngAfterViewInit(): void {
    this.mapa = new mapboxgl.Map({
      container: this.divMapa.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: this.center,
      zoom: this.zoomLevel,
    });

    this.mapa.on('zoom', (e) => (this.zoomLevel = this.mapa.getZoom()));

    this.mapa.on('zoomend', (e) => {
      if (this.mapa.getZoom() > 18) this.mapa.zoomTo(18);
    });

    this.mapa.on('move', (event) => {
      const target = event.target;
      const { lng, lat } = target.getCenter();
      this.center = [lng, lat];
    });
  }

  ngOnDestroy() {
    this.mapa.off('zoom', () => {});
    this.mapa.off('zoomend', () => {});
    this.mapa.off('move', () => {});
  }

  zoomIn() {
    this.mapa.zoomIn();
    this.zoomLevel = this.mapa.getZoom();
  }
  zoomOut() {
    this.mapa.zoomOut();
    this.zoomLevel = this.mapa.getZoom();
  }

  zoomCambio(valor: string) {
    this.mapa.zoomTo(Number(valor));
  }
}

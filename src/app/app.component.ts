import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    (mapboxgl as any).accessToken = environment.mapboxToken;
    // La librería de Mapbox establece este token como global, por lo que es mejor usarlo en la primera instancia de la aplicación
  }
  title = 'mapasApp';
}

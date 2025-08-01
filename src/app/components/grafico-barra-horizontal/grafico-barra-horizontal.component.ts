import { Component, Input, OnDestroy } from '@angular/core';

import { NgxChartsModule } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-grafico-barra-horizontal',
  imports: [NgxChartsModule],
  templateUrl: './grafico-barra-horizontal.component.html',
  styleUrl: './grafico-barra-horizontal.component.css'
})
export class GraficoBarraHorizontalComponent implements OnDestroy {

  @Input() results: any[] = [];

  // results: any[] = [
  //   {
  //     "name": "Juego 1",
  //     "value": 20
  //   },
  //   {
  //     "name": "Juego 2",
  //     "value": 25
  //   },
  //   {
  //     "name": "Juego 3",
  //     "value": 15
  //   },
  //   {
  //     "name": "Juego 4",
  //     "value": 30
  //   }
  // ];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Juegos';
  showYAxisLabel = true;
  yAxisLabel = 'Votos';

  colorScheme = 'nightLights';

  // intervalo;

  constructor() {

    // this.intervalo = setInterval(() => {
    //   const newResults = [...this.results];
    //   for ( let i in newResults ) {
    //     newResults[i].value = Math.round(Math.random() * 100);
    //   }
    //   this.results = [...newResults];
    // }, 1500);
    
  }

  onSelect(event: any) {
    console.log(event);
  }

  ngOnDestroy() {
    // clearInterval( this.intervalo );
  }

}

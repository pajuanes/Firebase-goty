import { Component, OnInit, EnvironmentInjector, runInInjectionContext } from '@angular/core';
import { GraficoBarraHorizontalComponent } from '../../components/grafico-barra-horizontal/grafico-barra-horizontal.component';
import { Game } from '../../interfaces/interfaces';
import { gameConverter } from '../../models/game.converter';

import { Firestore, collectionData, CollectionReference, collection } from '@angular/fire/firestore';

import { map } from 'rxjs/operators';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [GraficoBarraHorizontalComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent implements OnInit{

  juegos: any[] = [];

  constructor( private db: Firestore,
               private injector: EnvironmentInjector ) { }

  ngOnInit() {
    runInInjectionContext(this.injector, () => {
      const itemsRef = collection(this.db, 'goty') as CollectionReference<Game>;
      const itemsRefWithConverter = itemsRef.withConverter(gameConverter);
      collectionData(itemsRefWithConverter, { idField: 'id' })
      .pipe(
        map( (resp) =>
          resp.map((game) => ({ name: game.name, value: game.votos }))
        )
      )
      .subscribe({
        next: (juegos) => {
          this.juegos = juegos;
        },
        error: (err) => {
          console.error('Error al recibir datos:', err);
        }
      });
    });
  }
}


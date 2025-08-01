import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Game } from '../interfaces/interfaces';

import { of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  juegos: Game[] = [];

  constructor( private http: HttpClient ) { }

  getNominados() {
    if ( this.juegos.length > 0 ) {
      console.log('Desde Caché');
      return of (this.juegos);
    } else {
      console.log('Desde Internet');
      return this.http.get<Game[]>(`${ environment.url }/api/goty`)
        .pipe(
          tap( (juegos) => { this.juegos = juegos; } )
        );
    }
  }

  votarJuego( id: string ): any {
    return this.http.post(`${ environment.url }/api/goty/${ id }`, {})
      .pipe(
        catchError( err => {
          console.error('Error al votar el juego', err);
          return of({
            ok: false,
            mensaje: err.error.mensaje
          });
        })
      );
  }

}

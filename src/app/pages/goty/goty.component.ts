import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { GameService } from '../../services/game.service';
import { Game } from '../../interfaces/interfaces';

import Swal from 'sweetalert2'

@Component({
  selector: 'app-goty',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './goty.component.html',
  styleUrl: './goty.component.css'
})
export class GotyComponent implements OnInit {

  juegos: Game[] = [];

  constructor( private gameservice: GameService ) { }

  ngOnInit(): void {
    this.gameservice.getNominados().subscribe( (juegos: any) => {
      this.juegos = juegos;
    });
  }

  votarJuego( juego: Game ) {
    this.gameservice.votarJuego( juego.id )
      .subscribe( ( resp: { ok: boolean, mensaje: string } ) => {  
        if ( resp.ok ) {
          Swal.fire({
            title: resp.mensaje,
            text: 'Gracias por tu voto',
            icon: 'success',
            imageWidth: 100,
            imageHeight: 100,
            heightAuto: true,
            showConfirmButton: true,
            confirmButtonText: 'Aceptar',
            imageUrl: '/assets/imagenes/votar.png'
          });
          juego.votos++;
        } else {
          Swal.fire('Error', resp.mensaje, 'error');
        }
      });
  }

}

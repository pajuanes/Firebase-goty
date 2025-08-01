
import { FirestoreDataConverter, DocumentData } from '@angular/fire/firestore';
import { Game } from '../interfaces/interfaces';

export const gameConverter: FirestoreDataConverter<Game> = {
  toFirestore(game: Game): DocumentData {
    return { name: game.name, url: game.url, votos: game.votos };
  },
  fromFirestore(snapshot, options): Game {
    const data = snapshot.data(options)!;
    return {
      id: snapshot.id,
      name: data['name'],
      url: data['url'],
      votos: data['votos'],
    };
  }
};
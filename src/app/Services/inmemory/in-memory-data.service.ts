import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from '../../interfaces/hero';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Cap. America' },
      { id: 12, name: 'Thor' },
      { id: 13, name: 'Black Panther' },
      { id: 14, name: 'Spiderman' },
      { id: 15, name: 'Superman' },
      { id: 16, name: 'Batman' },
      { id: 17, name: 'Flash' },
      { id: 18, name: 'Shazam' },
      { id: 19, name: 'Dr. Strange' },
      { id: 20, name: 'Antman' }
    ];
    return { heroes };
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0
      ? Math.max(...heroes.map(hero => hero.id)) + 1
      : 11;
  }
}

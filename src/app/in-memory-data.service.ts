import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    // let heroes = [
    //   { id: 11, name: 'Pianino' },
    //   { id: 12, name: 'Franclin' },
    //   { id: 13, name: 'Super Mario' },
    //   { id: 14, name: 'Batman' },
    //   { id: 15, name: 'Chubaka' },
    //   { id: 16, name: 'Satana' },
    //   { id: 17, name: 'Splinter' },
    //   { id: 18, name: 'Legalas' },
    //   { id: 19, name: 'Zorro' },
    //   { id: 20, name: 'Marley' }
    // ];
    let heroes = [
      new Hero(11, 'Pianino'),
      new Hero(12, 'Franclin'),
      new Hero(13, 'Super Mario'),
      new Hero(14, 'Batman'),
      new Hero(15, 'Chubaka'),
      new Hero(16, 'Satana'),
      new Hero(17, 'Splinter'),
      new Hero(18, 'Legalas'),
      new Hero(19, 'Zorro'),
      new Hero(20, 'Marley')
    ];
    return {heroes};
  }
}
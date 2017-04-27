import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let heroes = [
      { id: 11, name: 'Pianino' },
      { id: 12, name: 'Franclin' },
      { id: 13, name: 'Super Mario' },
      { id: 14, name: 'Batman' },
      { id: 15, name: 'Chubaka' },
      { id: 16, name: 'Satana' },
      { id: 17, name: 'Splinter' },
      { id: 18, name: 'Legalas' },
      { id: 19, name: 'Zorro' },
      { id: 20, name: 'Marley' }
    ];
    return {heroes};
  }
}
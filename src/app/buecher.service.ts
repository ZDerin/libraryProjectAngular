import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BuecherService {

  constructor() { }

  getBooks() {
    return [

      {
        id: 2,
        cover: '/assets/dune.jpg',
        titel: 'Dune',
        autor: 'Frank Herbert',
      },
      {
        id: 3,
        cover: '/assets/harry.jpg',
        titel: 'Harry Potter',
        autor: 'J.K. Rowling',
      },
      {
        id: 4,
        cover: '/assets/jeffery.jpg',
        titel: 'Spiel der Zeit',
        autor: 'Jeffrey Archer',
      },
      {
        id: 1,
        cover: '/assets/tintenherz.jpg',
        titel: 'Tintenherz',
        autor: 'Cornelia Funke',
      },
      {
        id: 4,
        cover: '/assets/jeffery.jpg',
        titel: 'Spiel der Zeit',
        autor: 'Jeffrey Archer',
      },
      {
        id: 1,
        cover: '/assets/tintenherz.jpg',
        titel: 'Tintenherz',
        autor: 'Cornelia Funke',
      },
      {
        id: 1,
        cover: '/assets/tintenherz.jpg',
        titel: 'Tintenherz',
        autor: 'Cornelia Funke',
      },
    ];


  }
}

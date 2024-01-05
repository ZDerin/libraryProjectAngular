import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Book, BookToRemove, UserRegister} from "./interfaces";

@Injectable({
  providedIn: 'root'
})
export class BuecherService {


  constructor(private http: HttpClient,
              ) { }

  private bookUrl: string  = "/showAvailableBooks";
  private allBooksUrl: string  = "/showAllBooks";


  getStandortListe() {
    const headers = {
      'content-type': 'application/json',
      'authorization': `Bearer ${localStorage.getItem('token')}`
    };
    return this.http.get<any>(this.bookUrl, {headers})
  }

  getAllBooks(){
    const headers = {
      'content-type': 'application/json',
      'authorization': `Bearer ${localStorage.getItem('token')}`
    };
    return this.http.get<any>(this.allBooksUrl, {headers})
  }
    /*
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
    ];*/


}

import { Injectable } from '@angular/core';
import {Book} from "./interfaces";
import {HttpClient} from "@angular/common/http";
import {from, switchMap} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class LesewunschlistService {

  private readingListImportUrl: string = '/readingListImport';
  private bookToReadUrl: string = '/addBookToRead';

  constructor(private http: HttpClient) { }

  private convertCsvFileToString(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = (event) => {
        const csvString = event.target?.result as string;
        resolve(csvString);
      };

      reader.onerror = (error) => {
        reject(error);
      };

      reader.readAsText(file);
    });
  }

  postFile(fileToUpload: File) {
    const headers = {
      'content-type': 'application/json',
      'authorization': `Bearer ${localStorage.getItem('token')}`
    };

    /*
    //find the books in the reading wishlist
    this.convertCsvFileToString(fileToUpload)
      .then(result => result.split('\n').filter(item => item.includes('to-read')))
      .then((bookList) => this.httpClient.post<any>(this.readingListImportUrl, JSON.stringify(bookList), {headers: headers})
      )*/

    return from(
      this.convertCsvFileToString(fileToUpload)
        .then(result =>
          result.split('\n').filter(item => item.includes('to-read')))
    ).pipe(
      switchMap(bookList =>
        this.http.post<any>(this.readingListImportUrl, JSON.stringify(bookList), {headers}))
    );
  }

  addNewBookToWishlist(book: Book){
    const headers = {
      'content-type': 'application/json',
      'authorization': `Bearer ${localStorage.getItem('token')}`
    };
    return this.http.post<any>(this.bookToReadUrl, book, {headers})
  }

}

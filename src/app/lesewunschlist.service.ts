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

  postFile(fileToUpload: File) {

    const formData: FormData = new FormData();
    formData.append('file', fileToUpload);

    const headers = {
      'authorization': `Bearer ${localStorage.getItem('token')}`
    };
    return this.http.post<any>(this.readingListImportUrl, formData, {headers})
  }

  addNewBookToWishlist(book: Book){
    const headers = {
      'content-type': 'application/json',
      'authorization': `Bearer ${localStorage.getItem('token')}`
    };
    return this.http.post<any>(this.bookToReadUrl, book, {headers})
  }

}

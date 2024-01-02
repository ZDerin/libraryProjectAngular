import { Injectable } from '@angular/core';
import {from, Observable, switchMap, throwError} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class FileuploadService {
  private readingListImportUrl: string = '/readingListImport';

  constructor(private httpClient: HttpClient) { }

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

  postFile(fileToUpload: File){
    const headers = { 'content-type': 'application/json',
      'authorization' : `Bearer ${localStorage.getItem('token')}` };

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
        this.httpClient.post<any>(this.readingListImportUrl, JSON.stringify(bookList), { headers }))
      //burdaki any/string[] kisminda sadece ihtiyacimiz olan verileri filtreleyebiliriz, ya da backend te?
    );

  }



}

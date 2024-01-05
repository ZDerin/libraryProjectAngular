import {Component, OnInit} from '@angular/core';
import {CommonModule, NgForOf} from "@angular/common";
import {BuecherService} from "../buecher.service";
import {Book, BookToRemove} from "../interfaces";
import {log} from "@angular-devkit/build-angular/src/builders/ssr-dev-server";
import {LesewunschlistService} from "../lesewunschlist.service";

@Component({
  selector: 'app-allebuecher',
  standalone: true,
    imports: [
        NgForOf,
      CommonModule
    ],
  templateUrl: './allebuecher.component.html',
  styleUrl: './allebuecher.component.css'
})
export class AllebuecherComponent implements OnInit{
  allBooksArr: any[] = [];
  batchesOfBooks: any[] = [];
  currentUser: string|null = localStorage.getItem('username');
  constructor(private buecherService: BuecherService,
              private lesewunschlistService : LesewunschlistService) {}

  ngOnInit(): void {
    this.buecherService.getAllBooks().subscribe({
      next: value => {
        for(const book of value){
          this.allBooksArr.push(book)
        }
        this.allBooksArr.sort((a,b)=>{
          if (a["title"] < b["title"]) {
            return -1;
          } else if (a["title"] > b["title"]) {
            return 1;
          } else {
            return 0;
          }
        })
        while(this.allBooksArr.length) {
          this.batchesOfBooks.push(this.allBooksArr.splice(0,3))
        }
        /*
        if(!this.allBooksOnPage){
          while(this.readingWishlistComplett.length) {
            this.batchesOfBooks.push(this.readingWishlist.splice(0,3))
          }
          this.allBooksOnPage = true;
        }*/

      },
      error: err => {
        window.alert("Wunschlist konnte nicht erreicht werden!")
      }
    })
  }


  removeTheBook(book: BookToRemove) {
    this.lesewunschlistService.removeTheBookFromRepo(book).subscribe({
      next: () => {
        window.location.reload();
      },
      error: msg => {
        console.log(msg)
      }
    })
  }
}

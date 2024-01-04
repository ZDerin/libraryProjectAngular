import { Component, OnInit  } from '@angular/core';
import {BuecherService} from "../buecher.service";
import {CommonModule, NgForOf, NgIf} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-hauptseite',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    CommonModule,
    HttpClientModule
  ],
  templateUrl: './hauptseite.component.html',
  styleUrl: './hauptseite.component.css'
})
export class HauptseiteComponent implements OnInit{
  readingWishlist: any[] = [];
  batchesOfBooks: any[] = [];
  constructor(private buecherService: BuecherService) {}

  currentUser: string|null = localStorage.getItem('username');

  ngOnInit() {
    //this.readingWishlist = this.buecherService.getStandortListe();
    // Rufe den Service auf, um Mock-Daten zu erhalten
    this.buecherService.getStandortListe().subscribe({
      next: value => {

        this.readingWishlist = value;
        console.log(this.readingWishlist.length)
        console.log(value)
        while(this.readingWishlist.length) {
          this.batchesOfBooks.push(this.readingWishlist.splice(0,3))
        }
      },
      error: err => {
        window.alert("Wunschlist konnte nicht erreicht werden!")
      }
    });
    /*
    if(this.readingWishlist.length >0  && this.readingWishlist.length< 3){
      this.batchesOfBooks = this.readingWishlist;
    } else {

      }*/


  }
}

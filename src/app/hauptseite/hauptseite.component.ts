import { Component, OnInit  } from '@angular/core';
import {BuecherService} from "../buecher.service";
import {CommonModule, NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-hauptseite',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    CommonModule
  ],
  templateUrl: './hauptseite.component.html',
  styleUrl: './hauptseite.component.css'
})
export class HauptseiteComponent {
  books: any[] = [];
  batchesOfBooks: any[] = [];
  constructor(private buecherService: BuecherService) {}

  currentUser: string|null = localStorage.getItem('username');

  ngOnInit() {
    // Rufe den Service auf, um Mock-Daten zu erhalten
    this.books = this.buecherService.getBooks();
    while(this.books.length) {
      this.batchesOfBooks.push(this.books.splice(0,3))
    }
  }
}

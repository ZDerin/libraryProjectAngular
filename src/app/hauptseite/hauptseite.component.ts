import { Component, OnInit  } from '@angular/core';
import {BuecherService} from "../buecher.service";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-hauptseite',
  standalone: true,
  imports: [
  NgForOf
],
  templateUrl: './hauptseite.component.html',
  styleUrl: './hauptseite.component.css'
})
export class HauptseiteComponent {
  books: any[] = [];

  constructor(private buecherService: BuecherService) {}

  ngOnInit() {
    // Rufe den Service auf, um Mock-Daten zu erhalten
    this.books = this.buecherService.getBooks();
  }
}

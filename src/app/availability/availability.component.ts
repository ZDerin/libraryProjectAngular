import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-availability',
  standalone: true,
  imports: [],
  templateUrl: './availability.component.html',
  styleUrl: './availability.component.css'
})
export class AvailabilityComponent {

// Dank an hhf42

// erwartet Strings mit der T-ID der zu suchenden Bücher
  buecherTIDs: string[];

  // erwartet String mit Namen des Bücherhallen-Stadorts
  standort: string;

  website: string;

  urlBasis: string = 'https://www.buecherhallen.de/suchergebnis-detail/medium/';

  constructor(
    private standortService: StandortService,
    private buecherService: BuecherService,
    private http: HttpClient) {
  }

  ngOnInit() {
    this.standort = this.standortService.getStandort();
    this.buecherTIDs = this.buecherService.getTIDs();

      for (const buchTID of this.buecherTIDs) {
          this.sucheBuch(buchTID, this.standort);
      }
  }

// Funktion, um nach einem Buch in einer Bücherhalle zu suchen
// wenn sich das Layout der Website ändert, dann läuft die regex ins Leere, das kann man sicher eleganter machen
  sucheBuch(gesuchteTID, standort) {
    let urlBuch = this.urlBasis + gesuchteTID + '.html';
    try {
      this.http.get(urlBuch).subscribe(data =>
        this.website = data.toString());
    } catch (error) {
      // TODO Fehlermeldung
    }

    let suche;

    try {
      suche = this.website.includes(standort + '</span>\n    <span class="medium-availability-item-title-icon">\n              <svg width="19px" height="19px" viewBox="0 0 19 19" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" role="img" aria-label="Verfügbar">')
    } catch {
      // TODO Fehlermeldung
    }

    if (suche) {
      // TODO Rücklieferung: true/ false
      console.log('Buch ' + gesuchteTID + ' gefunden in ' + standort);
    } else {
      // TODO Fehlermeldung
    }
  }

}

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
  buecher: string[];

  // erwartet String mit Namen des Bücherhallen-Stadorts
  buecherhalle: string;

  website: string;

  urlBasis: string = 'https://www.buecherhallen.de/suchergebnis-detail/medium/';

  constructor(
    private standortService: StandortService,
    private buecherService: BuecherService,
    private http: HttpClient) {
  }

  ngOnInit() {
    this.buecherhalle = this.standortService.getStandort();
    this.buecher = this.buecherService.getTIDs();
  }

// Funktion, um nach einem Buch in einer Bücherhalle zu suchen
// wenn sich das Layout der Website ändert, dann läuft die regex ins Leere, das kann man sicher eleganter machen
  sucheBuch(gesuchtesBuch, buecherhalle) {
    let urlBuch = this.urlBasis + gesuchtesBuch + '.html';
    try {
      this.http.get(urlBuch).subscribe(data =>
        this.website = data.toString());
    } catch (error) {
      // TODO Fehlermeldung
    }

    let suche;

    try {
      suche = this.website.includes(buecherhalle + '</span>\n    <span class="medium-availability-item-title-icon">\n              <svg width="19px" height="19px" viewBox="0 0 19 19" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" role="img" aria-label="Verfügbar">')
    } catch {
      // TODO Fehlermeldung
    }

    if (suche) {
      // TODO Rücklieferung: true/ false
      console.log('Buch ' + gesuchtesBuch + ' gefunden in ' + buecherhalle);
    } else {
      // TODO Fehlermeldung
    }
  }


// Nach allen Büchern in allen Bücherhallen suchen und dann eine Stunde warten.
//     while(true) {
//       for (let buch of this.buecher) {
//       this.sucheBuch(buch, this.buecherhalle) }
//
//       // print(time.ctime(),'Beendet, 1h warten')
//       // time.sleep(3600)
//   }
}

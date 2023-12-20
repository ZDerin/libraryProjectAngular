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

    // Rufe die Detail-Seite für das Buch mit der gesuchten TID auf
    // und speichere den dazugehörigen HTML-Code als String
    let urlBuch = this.urlBasis + gesuchteTID + '.html';
    try {
      this.http.get(urlBuch).subscribe(data =>
        this.website = data.toString());
      console.log(this.website);
    } catch (error) {
      // TODO Fehlermeldung
    }


    // Suche mithilfe des RegEx-Suchtexts nach dem entsprechenden Standort.
    let istVerfuegbar;
    let suchtext = "<.*" + standort + "<[^V]*Verfügbar\">";
    try {
      istVerfuegbar = this.website.match(suchtext);
    } catch {
      // TODO Fehlermeldung
    }

    // Update in der Datenbank den Status der Verfügbarkeit
    this.buecherService.updateBuch(gesuchteTID, istVerfuegbar);


    // if (istVerfuegbar) {
    //   console.log('Buch ' + gesuchteTID + ' gefunden in ' + standort);
    // } else {
    //   //
    // }
  }

}

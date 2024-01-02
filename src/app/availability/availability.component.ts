import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {StandortService} from "../standort.service";
import {BuecherService} from "../buecher.service";

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
//   buecherTIDs: string[];
//
//   // erwartet String mit Namen des Bücherhallen-Standorts
//   standort: string;
//
//   website: string;

  urlBasis: string = 'https://www.buecherhallen.de/suchergebnis-detail/medium/';

  constructor(
    private standortService: StandortService,
    private buecherService: BuecherService,
    private http: HttpClient) {
  }

  ngOnInit() {
    // this.standort = this.standortService.getStandort();
    // this.buecherTIDs = this.buecherService.getTIDs();
    //
    //   for (const buchTID of this.buecherTIDs) {
    //       this.sucheBuch(buchTID, this.standort);
    //   }
  }

// Funktion, um nach einem Buch in einer Bücherhalle zu suchen.
// wenn sich das Layout der Website ändert, dann läuft die regex ins Leere, das kann man sicher eleganter machen
  sucheBuch(gesuchteTID: string, standort: string) {

    // Rufe die Detail-Seite für das Buch mit der gesuchten TID auf
    // und speichere den dazugehörigen HTML-Code als String
    let urlBuch = this.urlBasis + gesuchteTID + '.html';

    let buecherTIDs: string[];
    let website: string;

    try {
      let headers = new HttpHeaders({'Accept':'text/html','Content-Type':'text/html', 'Access-Control-Allow-Origin':'http://localhost:4200'});
      this.http.get(urlBuch, {headers}).subscribe(data => {
        website = data.toString();
        console.log(website);

        // Suche mithilfe des RegEx-Suchtexts nach dem entsprechenden Standort.
        let istVerfuegbar: boolean;
        let suchtext = new RegExp("<.*" + standort + "<[^>]*>[^>V]*Verfügbar.*");
        istVerfuegbar = suchtext.test(website);

        // Update in der Datenbank den Status der Verfügbarkeit
       /* this.buecherService.updateBuch(gesuchteTID, istVerfuegbar);*/
      }
        );
    } catch (error) {
      // TODO Fehlermeldung
    }

  }
}

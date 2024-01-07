import { Component, OnInit  } from '@angular/core';
import {BuecherService} from "../buecher.service";
import {CommonModule, NgForOf, NgIf} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {LadevorgangService} from "../ladevorgang.service";
import {LadevorgangComponent} from "../ladevorgang/ladevorgang.component";
import {StandorteComponent} from "../standorte/standorte.component";
import {StandortService} from "../standort.service";

@Component({
  selector: 'app-hauptseite',
  standalone: true,
    imports: [
        NgForOf,
        NgIf,
        CommonModule,
        HttpClientModule,
        LadevorgangComponent,
        StandorteComponent
    ],
  templateUrl: './hauptseite.component.html',
  styleUrl: './hauptseite.component.css'
})
export class HauptseiteComponent implements OnInit{
  readingWishlist: any[] = [];
  batchesOfBooks: any[] = [];
  currentUser: string|null = localStorage.getItem('username');
  standort: string = "";
  constructor(private buecherService: BuecherService,
              protected ladevorgangService: LadevorgangService,
              private standortService : StandortService) {}



  ngOnInit() {
    this.standort = localStorage.getItem('standort')!;

    //this.readingWishlist = this.buecherService.getStandortListe();
    // Rufe den Service auf, um Mock-Daten zu erhalten
    this.ladevorgangService.showLoader();

    this.buecherService.getStandortListe().subscribe({
      next: value => {
        this.readingWishlist = value;

        while(this.readingWishlist.length) {
          this.batchesOfBooks.push(this.readingWishlist.splice(0,3))
        }
        this.ladevorgangService.hideLoader();
      },
      error: err => {
        window.alert("Wunschliste konnte nicht erreicht werden!")
      }
    });

  }

}

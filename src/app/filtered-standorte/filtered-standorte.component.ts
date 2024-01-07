import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {StandortService} from "../standort.service";
import {StandorteComponent} from "../standorte/standorte.component";
import {CommonModule} from "@angular/common";
import {Standort} from "../interfaces";

@Component({
    selector: 'app-filtered-standorte',
    standalone: true,
    imports: [
        CommonModule,
        ReactiveFormsModule,
        StandorteComponent
    ],
    templateUrl: './filtered-standorte.component.html',
    styleUrl: './filtered-standorte.component.css'
})
export class FilteredStandorteComponent implements OnInit{
    standorte: Standort[] = [];
    searchForm = new FormGroup({
        search: new FormControl("")
    })

    constructor(private standortservice: StandortService) {
    }

    search(): Standort[] {
        return this.standortservice.getfilteredStandort(this.searchForm.value.search!, this.standorte)
    }

    ngOnInit() {
      return this.standortservice.getStandort().subscribe({ next: value => {
          this.standorte = value;
        },
        error: err => {
          console.log(err)
        }});
    }
}


import {Component, Input} from '@angular/core';
import {StandortService} from "../standort.service";
import {NgClass, NgForOf} from "@angular/common";
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {Standort} from "../interfaces";

@Component({
    selector: 'app-standorte',
    standalone: true,
  imports: [
    NgForOf,
    ReactiveFormsModule,
    NgClass
  ],
    templateUrl: './standorte.component.html',
    styleUrl: './standorte.component.css'
})
export class StandorteComponent {
    actualLocation: string |null = localStorage.getItem('standort');

    content: Standort [] = [];
    @Input() displayedLocations : Standort [] | undefined;
    isClickedArr: boolean[] = [];

    constructor(private standortService : StandortService) {
    }

  saveLocation(standort: string) {
    localStorage.setItem('standort', standort);
    this.actualLocation = standort;
    //unnötig, weil als requestparam gut funktioniert
    //this.standortService.setActualLocation(this.actualLocation);
  }

  clickAnimation(i : number) {
    if(this.isClickedArr !== undefined){
      new Array(this.displayedLocations!.length).fill(false);
    }
    this.isClickedArr[i] = !this.isClickedArr[i];
    setTimeout(()=>{
      this.isClickedArr[i] = !this.isClickedArr[i];
    }, 150)
  }
}

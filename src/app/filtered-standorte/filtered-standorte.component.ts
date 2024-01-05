import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {StandortService} from "../standort.service";
import {StandorteComponent} from "../standorte/standorte.component";
import {CommonModule} from "@angular/common";

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
export class FilteredStandorteComponent {
    standorte: string[] = this.standortservice.getStandort()
    searchForm = new FormGroup({
        search: new FormControl("")
    })

    //wenn das Backend steht, hier noch eine ngOnInit Methode
    constructor(private standortservice: StandortService) {
    }

    search(): string[] {

        return this.standortservice.getfilteredStandort(this.searchForm.value.search!, this.standorte)
    }
}

import {Component, Input} from '@angular/core';
import {StandortService} from "../standort.service";
import {NgForOf} from "@angular/common";
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";

@Component({
    selector: 'app-standorte',
    standalone: true,
    imports: [
        NgForOf,
        ReactiveFormsModule
    ],
    templateUrl: './standorte.component.html',
    styleUrl: './standorte.component.css'
})
export class StandorteComponent {

    content: string [] = [];
    @Input() displayedLocations : string [] | undefined;
}

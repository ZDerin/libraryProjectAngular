import { Component } from '@angular/core';
import {AlertsComponent} from "../alerts/alerts.component";

@Component({
  selector: 'app-startseite',
  standalone: true,
  imports: [
    AlertsComponent
  ],
  templateUrl: './startseite.component.html',
  styleUrl: './startseite.component.css'
})
export class StartseiteComponent {

}

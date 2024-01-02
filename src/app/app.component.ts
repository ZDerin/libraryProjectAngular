import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {FooterComponent} from "./footer/footer.component";
import {HeaderComponent} from "./header/header.component";
import {StartseiteComponent} from "./startseite/startseite.component";
import {HauptseiteComponent} from "./hauptseite/hauptseite.component";
import {AvailabilityComponent} from "./availability/availability.component";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {LoginComponent} from "./login/login.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,
    FooterComponent, HeaderComponent,
    StartseiteComponent, HauptseiteComponent,
    AvailabilityComponent, HttpClientModule,
    LoginComponent],


  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'libraryProjectAngular';
}

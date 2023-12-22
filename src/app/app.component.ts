import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {AvailabilityComponent} from "./availability/availability.component";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {HttpClientModule} from "@angular/common/http";
import {LoginComponent} from "./login/login.component";

@Component({
  selector: 'app-root',
  standalone: true,
    imports: [CommonModule, RouterOutlet, AvailabilityComponent, HttpClientModule, LoginComponent],

  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'libraryProjectAngular';
}

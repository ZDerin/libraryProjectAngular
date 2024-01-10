import {Component, OnInit} from '@angular/core';
import {UserdataService} from "../userdata.service";
import {ZitatseiteComponent} from "../zitatseite/zitatseite.component";

@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [
    ZitatseiteComponent
  ],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})
export class LogoutComponent implements OnInit{
  ngOnInit(): void {
    localStorage.removeItem('standort')
  }

}

import {Component, OnInit} from '@angular/core';
import {UserdataService} from "../userdata.service";

@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})
export class LogoutComponent implements OnInit{
  ngOnInit(): void {
    localStorage.removeItem('standort')
  }

}

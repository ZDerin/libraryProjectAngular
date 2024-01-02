import {Component, EventEmitter} from '@angular/core';
import {CommonModule} from "@angular/common";
import {UserdataService} from "../userdata.service";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  currentUser: string|null  = localStorage.getItem('username');
  constructor(private userdataService : UserdataService) {
  }
  logout() {
    this.userdataService.userLogOut();
  }

}

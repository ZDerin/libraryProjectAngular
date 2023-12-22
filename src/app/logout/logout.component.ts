import { Component } from '@angular/core';
import {UserdataService} from "../userdata.service";

@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})
export class LogoutComponent {

  constructor(private userdataService : UserdataService) {
  }
  logout() {
    const token = localStorage.getItem('token')
    console.log(token);
    this.userdataService.userLogOut(token!)
  }
}

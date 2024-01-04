import {AfterViewInit, Component, EventEmitter} from '@angular/core';
import {CommonModule} from "@angular/common";
import {UserdataService} from "../userdata.service";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements AfterViewInit {
  currentUser: string | null = localStorage.getItem('username');
  burgerIsOpen: boolean = false;

  constructor(private userdataService: UserdataService) {
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.toggleLogo();
    }, 3000);
  }

  logout() {
    this.userdataService.userLogOut();
  }

  toggleLogo() {
    const logo = document.getElementById("logo");
    const gif = document.getElementById("gif");

    logo!.classList.toggle("logo2");
    gif!.classList.toggle("gif2");
  }

  toggleBurger() {
    this.burgerIsOpen = !this.burgerIsOpen;
  }
}

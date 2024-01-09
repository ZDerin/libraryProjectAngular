import {Component, OnInit} from '@angular/core';
import {CommonModule, NgForOf, NgIf} from "@angular/common";
import {ZitatService} from "../zitat.service";

@Component({
  selector: 'app-zitatseite',
  standalone: true,
  imports: [
    NgIf,
    NgForOf,
    CommonModule
  ],
  templateUrl: './zitatseite.component.html',
  styleUrl: './zitatseite.component.css'
})
export class ZitatseiteComponent implements OnInit {
zitat : any;

constructor(private zitatService : ZitatService) {

}
    ngOnInit() {
  this.zitatService.getZufallsZitat().subscribe({
    next: value => {
      this.zitat = value;
    },
    error: err => {
      console.log("Zitat konnte nicht ausgegeben werden.")
    }
  })

}
}

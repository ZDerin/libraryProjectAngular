import {Component, OnInit} from '@angular/core';
import {CommonModule, NgForOf, NgIf} from "@angular/common";
import {ZitatService} from "../zitat.service";
import {Zitat} from "../interfaces";

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
  zitat: Zitat | undefined;

  constructor(private zitatService: ZitatService) {

  }

  ngOnInit() {
    console.log("jetzt in OnInit")
    this.zitatService.getZufallsZitat().subscribe({
      next: value => {
        this.zitat = value;
        console.log("Zitat zugeordnet")
      },
      error: err => {
        console.log("Zitat konnte nicht ausgegeben werden.")
      }
    })

  }
}

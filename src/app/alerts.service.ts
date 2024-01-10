import {Injectable} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {AlertInhalteComponent} from "./alert-inhalte/alert-inhalte.component";

@Injectable({
  providedIn: 'root'
})
export class AlertsService {

  constructor(private dialog: MatDialog) {
  }

  openDialog(title : string, message: string) {
    this.dialog.open(AlertInhalteComponent, {
      data: {
        title,
        message,
      }
    })
  }
}

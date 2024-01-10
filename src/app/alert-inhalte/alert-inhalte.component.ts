import {Component, Inject} from '@angular/core';
import {MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle, MAT_DIALOG_DATA} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'app-alert-inhalte',
  standalone: true,
  imports: [MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose, MatButtonModule],
  templateUrl: './alert-inhalte.component.html',
  styleUrl: './alert-inhalte.component.css'
})
export class AlertInhalteComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}

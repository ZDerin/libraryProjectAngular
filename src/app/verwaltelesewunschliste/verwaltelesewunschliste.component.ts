import { Component } from '@angular/core';
import {FileuploadService} from "../fileupload.service";
import {Router} from "@angular/router";
import {CommonModule, NgOptimizedImage} from "@angular/common";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {Book} from "../interfaces";
import {LesewunschlistService} from "../lesewunschlist.service";
import {HttpClientModule} from "@angular/common/http";
import {LadevorgangService} from "../ladevorgang.service";
import {LadevorgangComponent} from "../ladevorgang/ladevorgang.component";
import {AlertsService} from "../alerts.service";

@Component({
  selector: 'app-readingwishlist',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule, LadevorgangComponent, NgOptimizedImage],
  templateUrl: './verwaltelesewunschliste.component.html',
  styleUrl: './verwaltelesewunschliste.component.css'
})
export class VerwaltelesewunschlisteComponent {
  fileToUpload: File|null = null;
  showHelp: boolean = false;
  isWithFile: boolean = false;
  buttonInhalt: string = "Wähle Datei aus"

  bookToReadForm = new FormGroup({
    isbn : new FormControl('', [Validators.required, Validators.minLength(13), Validators.maxLength(13)]),
    title : new FormControl('', [Validators.required, Validators.minLength(1)]),
    author :new FormControl('', [Validators.required, Validators.minLength(1)])
})

  constructor(private router: Router,
              private lesewunschlistService : LesewunschlistService,
              private ladevorgangService: LadevorgangService,
              private alertsService : AlertsService) {
  }

  handleFileInput(event: any) {
    this.fileToUpload=(event.target!).files[0];
  }

  uploadCsvFile() {
    this.ladevorgangService.showLoader();
    if(this.fileToUpload !== null){
      this.lesewunschlistService.postFile(this.fileToUpload!!).subscribe({
        next : data => {
          this.ladevorgangService.hideLoader();
          //window.alert("Deine Goodreads Lesewunschliste wurde erfolgreich hinzugefügt!")
          this.alertsService.openDialog("Juhu", "Deine Goodreads Lesewunschliste wurde erfolgreich hinzugefügt!")
          this.router.navigate(['/home']);
        }
        , error : msg => {
          console.log(msg);
          this.ladevorgangService.hideLoader();
          //window.alert("Deine Goodreads Lesewunschliste konnte nicht hinzugefügt werden!");
          this.alertsService.openDialog("Achtung", "Deine Goodreads Lesewunschliste konnte nicht hinzugefügt werden!")
        }
      });
    }else {
      //window.alert("Keine Datei vorhanden!")
      this.alertsService.openDialog("Achtung", "Keine Datei vorhanden!")
    }

  }

  changeShowHelp() {
    this.showHelp = !this.showHelp;
  }

  uploadOneBook() {
    const bookInfos= this.bookToReadForm.value;
    if(this.bookToReadForm.valid){
      const bookToAdd : Book = {
        isbn : bookInfos.isbn!,
        title : bookInfos.title!,
        author: bookInfos.author!
      }
      this.lesewunschlistService.addNewBookToWishlist(bookToAdd).subscribe({next: msg => {
          console.log(msg)},
          error: msg => {
          console.log(msg)
          }
        });
      this.bookToReadForm.reset();
      // window.alert("Buch wurde erfolgreich addiert!")
      this.alertsService.openDialog("Juhu!", "Buch wurde erfolgreich hinzugefügt!")
    } else {
      this.alertsService.openDialog("Achtung!", "Buch konnte nicht hinzugefügt werden!")
      //window.alert("Buch konnte nicht addiert werden!")
    }
  }

  protected readonly File = File;



  confirmUpload() {
    this.isWithFile = !this.isWithFile;
    this.buttonInhalt = this.fileToUpload?.name!;
  }
}

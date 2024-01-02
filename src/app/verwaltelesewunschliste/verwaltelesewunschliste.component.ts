import { Component } from '@angular/core';
import {FileuploadService} from "../fileupload.service";
import {Router} from "@angular/router";
import {CommonModule} from "@angular/common";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {Book} from "../interfaces";
import {LesewunschlistService} from "../lesewunschlist.service";

@Component({
  selector: 'app-readingwishlist',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './verwaltelesewunschliste.component.html',
  styleUrl: './verwaltelesewunschliste.component.css'
})
export class VerwaltelesewunschlisteComponent {

  fileToUpload: File| null = null;
  showHelp: boolean = false;

  bookToReadForm = new FormGroup({
    isbn : new FormControl('', [Validators.required, Validators.minLength(13), Validators.maxLength(13)]),
    title : new FormControl('', [Validators.required, Validators.minLength(1)]),
    author :new FormControl('', [Validators.required, Validators.minLength(1)])
})

  constructor(private router: Router,
              private lesewunschlistService : LesewunschlistService) {
  }

  handleFileInput(event: any) {
    this.fileToUpload=(event.target!).files[0];
  }

  uploadFile() {
    if(this.fileToUpload !== null){
      this.lesewunschlistService.postFile(this.fileToUpload).subscribe({
          next : data => {
            window.alert("Deine Lesewunschliste vom Goodreads wurde erfolgreich hinzugefügt!")
            this.router.navigate(['/home']);
          }
      , error : msg => {
          console.log(msg);
          window.alert("Deine Lesewunschliste vom Goodreads konnte nicht hinzugefügt werden!");
        }
      });
    } else {
      window.alert("Es gibt keine Datei hochzuladen!")
    }
  }

  changeShowHelp() {
    this.showHelp = !this.showHelp;
  }

  addToReadingWishlist() {
    const bookInfos= this.bookToReadForm.value;
    if(this.bookToReadForm.valid){
      const bookToAdd : Book = {
        isbn : bookInfos.isbn!,
        title : bookInfos.title!,
        author: bookInfos.author!
      }
      this.lesewunschlistService.addNewBookToWishlist(bookToAdd);
      this.bookToReadForm.reset();
      window.alert("Buch wurde erfolgreich addiert!")
    } else {
      window.alert("Buch konnte nicht addiert werden!")
    }
  }
}


//http://www.goodreads.com/review_porter/export/${userid from goodreads- to be at mobile login}/goodreads_export.csv

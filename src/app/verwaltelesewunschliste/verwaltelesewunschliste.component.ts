import { Component } from '@angular/core';
import {FileuploadService} from "../fileupload.service";
import {Router} from "@angular/router";
import {CommonModule} from "@angular/common";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {Book} from "../interfaces";
import {LesewunschlistService} from "../lesewunschlist.service";
import {HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-readingwishlist',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './verwaltelesewunschliste.component.html',
  styleUrl: './verwaltelesewunschliste.component.css'
})
export class VerwaltelesewunschlisteComponent {
  fileToUpload: File|null = null;
  showHelp: boolean = false;

  fileForm= new FormGroup({
    file: new FormControl( null ,Validators.required)
  })

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
    console.log(this.fileToUpload);
  }

  uploadCsvFile() {
    if(this.fileToUpload !== null){
      this.lesewunschlistService.postFile(this.fileToUpload!!).subscribe({
        next : data => {
          window.alert("Deine Lesewunschliste vom Goodreads wurde erfolgreich hinzugefügt!")
          this.router.navigate(['/home']);
        }
        , error : msg => {
          console.log(msg);
          window.alert("Deine Lesewunschliste vom Goodreads konnte nicht hinzugefügt werden!");
        }
      });
    }else {
      window.alert("Es gibt keine Datei hochzuladen!")
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
      window.alert("Buch wurde erfolgreich addiert!")
    } else {
      window.alert("Buch konnte nicht addiert werden!")
    }
  }

}

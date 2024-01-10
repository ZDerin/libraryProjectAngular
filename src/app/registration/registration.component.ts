import { Component, EventEmitter } from '@angular/core';
import {FormBuilder, ReactiveFormsModule, FormControl, Validators, NgForm, FormGroup} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {RouterOutlet} from "@angular/router";
import {UserdataService} from "../userdata.service";
import {UserRegister} from "../interfaces";
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {AlertInhalteComponent} from "../alert-inhalte/alert-inhalte.component";
import {AlertsService} from "../alerts.service";

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterOutlet],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {
  protected readonly localStorage = localStorage;
  isFormSubmitted:boolean = false;
  errorTextBenutzer = "";
  errorTextEmail = "";
  errorText = "";

  /*
  registrationForm = this.formBuilder.group({
    username: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    password1: ['', [Validators.required, Validators.minLength(6)]],
    password2: ['', [Validators.required, Validators.minLength(6)]],
  })*/

  registrationForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(2)]),
    email : new FormControl('', [Validators.required, Validators.email]),
    password1: new FormControl ('', [Validators.required, Validators.minLength(6)]),
    password2 : new FormControl('', [Validators.required, Validators.minLength(6)])
  })

  constructor(private formBuilder: FormBuilder,
              private userdataService : UserdataService,
              private router : Router,
              private alertsService: AlertsService) {
  }

  get formControls() {
    return this.registrationForm.controls;
  }

  register() {
    this.isFormSubmitted = true;
    const newUserData = this.registrationForm.value;
      //reset the form?
    if(newUserData.password1 !== newUserData.password2){
      //window.alert("Passwörter stimmen nicht überein!"); // bitte so lassen, nicht in Html!
      this.alertsService.openDialog("Achtung", "Passwörter stimmen nicht überein!")
    }else if((newUserData.password1 === newUserData.password2 ) && this.registrationForm.valid){
        const userToRegister : UserRegister = {
          username: newUserData.username!,
          email: newUserData.email!,
          password: newUserData.password1!
        }
        this.userdataService.registerNewUser(userToRegister).subscribe({
          next: (response) => {
            // window.alert("Die Registrierung war erfolgreich!");
            this.alertsService.openDialog("Juhu!", "Die Registrierung war erfolgreich!")

            this.router.navigate(['/log']);
            this.errorTextEmail = "";
            this.errorTextBenutzer = "";
            this.errorText = "";
          },
          error: msg => {
            console.error('Error during registration:', msg);

            if(msg.error.text.includes("nutzer_username_key")){
              this.errorTextBenutzer = "Dieser Benutzername existiert bereits";
            } else if (msg.error.text.includes("nutzer_email_key")){
              this.errorTextEmail ="Diese Email Adresse existiert bereits"
            }
          }
        })
    } else {
      this.errorText ='Es ist ein Fehler aufgetreten! Bitte überprüfe deine Eingaben.'
    }
  }
}

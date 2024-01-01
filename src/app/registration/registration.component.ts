import { Component, EventEmitter } from '@angular/core';
import {FormBuilder, ReactiveFormsModule, FormControl, Validators, NgForm, FormGroup} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {RouterOutlet} from "@angular/router";
import {UserdataService} from "../userdata.service";
import {UserRegister} from "../interfaces";
import {Router} from "@angular/router";

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
              private router : Router) {
  }

  get formControls() {
    return this.registrationForm.controls;
  }

  register() {
    this.isFormSubmitted = true;
    const newUserData = this.registrationForm.value;

    if(newUserData.password1 !== newUserData.password2){
      window.alert('Die Passwörter sind nicht gleich!');
      //reset the form?
    } else if((newUserData.password1 === newUserData.password2 ) && this.registrationForm.valid){
        const userToRegister : UserRegister = {
          username: newUserData.username!,
          email: newUserData.email!,
          password: newUserData.password1!
        }
        this.userdataService.registerNewUser(userToRegister).subscribe(
          response => {
            //console.log('Registration successful:', response);
            window.alert("Die Registrierung war erfolgreich!");
            this.router.navigate(['/log'])


          },
          (error) => {
            console.error('Error during registration:', error);
            if(error.error.text.includes("nutzer_username_key")){
              window.alert("Dieser Benutzername gehört bereits jemand anderem!")
            } else if (error.error.text.includes("nutzer_email_key")){
              window.alert("Diese Email Adresse gehört bereits jemand anderem!")
            }
          })
    } else {
      window.alert('Es ist ein Fehler aufgetreten! Bitte überprüfe deine Eingaben.')
    }
  }


}

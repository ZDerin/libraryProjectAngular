import { Component, EventEmitter } from '@angular/core';
import {FormBuilder, ReactiveFormsModule, FormControl, Validators} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {RouterOutlet} from "@angular/router";
import {UserdataService} from "../userdata.service";
import {UserRegister} from "../user-interface";

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterOutlet],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {

  isFormSubmitted:boolean = false;
  //show:boolean = false;

  registrationForm = this.formBuilder.group({
    username: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    password1: ['', [Validators.required, Validators.minLength(6)]],
    password2: ['', [Validators.required, Validators.minLength(6)]],
  })

  constructor(private formBuilder: FormBuilder,
              private userdataService : UserdataService) {
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
    } else if(newUserData.password1 === newUserData.password2){
      const userToRegister : UserRegister = {
        username: newUserData.username!,
        email: newUserData.email!,
        password: newUserData.password1!
      }
      this.userdataService.registerNewUser(userToRegister).subscribe(
        response => {
          console.log('Registration successful:', response);
        })
    }
  }

}

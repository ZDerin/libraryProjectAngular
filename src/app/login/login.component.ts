import { Component } from '@angular/core';
import {NgIf} from "@angular/common";
import {FormBuilder, ReactiveFormsModule, Validators} from "@angular/forms";
import {UserdataService} from "../userdata.service";
import {LogoutComponent} from "../logout/logout.component";
import {UserJwt} from "../user-interface";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    NgIf,
    ReactiveFormsModule,
    LogoutComponent
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {

  isFormSubmitted:boolean = false;
  private token:string = '';

  loginForm = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  })

  constructor(private formBuilder: FormBuilder,
              private userdataService : UserdataService) {
  }

  get formControls() {
    return this.loginForm.controls;
  }

  login() {
    this.isFormSubmitted = true;
    const loginData = this.loginForm.value;

    const userToLogin = {
      username: loginData.username!,
      password : loginData.password!,
      token: '',
      roles: ''
    }
    this.userdataService.userLogIn(userToLogin).subscribe(
      response => {
        console.log('Login successful:', response);
        localStorage.setItem("token", response.token);
      })
  }
}

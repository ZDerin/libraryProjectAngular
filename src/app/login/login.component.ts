import { Component } from '@angular/core';
import {NgIf} from "@angular/common";
import {FormBuilder, ReactiveFormsModule, Validators} from "@angular/forms";
import {UserdataService} from "../userdata.service";
import {LogoutComponent} from "../logout/logout.component";
import {UserJwt} from "../interfaces";
import {Router} from "@angular/router";

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
  currentUser: string|null = localStorage.getItem('username');

  loginForm = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  })

  constructor(private formBuilder: FormBuilder,
              private userdataService : UserdataService,
              private router : Router) {
  }

  get formControls() {
    return this.loginForm.controls;
  }

  login() {
    this.isFormSubmitted = true;
    const loginData = this.loginForm.value;

    const userToLogin: UserJwt = {
      username: loginData.username!,
      password : loginData.password!,
      token: '',
      roles: ''
    }
    this.userdataService.userLogIn(userToLogin).subscribe(
      response => {
        console.log('Login successful:', response);
        localStorage.setItem("token", response.token);
        localStorage.setItem('username', response.username);
        this.router.navigate(['/home']).then(response => {
          window.location.reload();
        });
      },
      error => {
        window.alert("Einloggen Daten sind nicht richtig!")
      })


  }
}

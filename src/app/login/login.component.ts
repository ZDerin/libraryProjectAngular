import { Component } from '@angular/core';
import {NgIf} from "@angular/common";
import {FormBuilder, ReactiveFormsModule, Validators} from "@angular/forms";
import {UserdataService} from "../userdata.service";

@Component({
  selector: 'app-login',
  standalone: true,
    imports: [
        NgIf,
        ReactiveFormsModule
    ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {

  isFormSubmitted:boolean = false;

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
    /*
    const userToLogin = {
      username: loginData.username!,
      password : loginData.password!
    }
    this.userdataService.sendLoginDataToDb(userToLogin).subscribe(
      response => {
        console.log('Login successful:', response);
      })*/

  this.userdataService.sendLogInFormValues(loginData).subscribe(
    response => {
      console.log('Login successful: ', response)
    }
  )
    console.log('logged in')
  }


}

import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import {UserLogin, UserRegister} from "./user-interface";
import {AbstractControl, ValidationErrors, ɵElement, ɵFormGroupValue, ɵTypedOrUntyped} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  private dbUrl: string = '/api/v1/users';
  private singInUrl: string = '/login';

  constructor(private http: HttpClient) { }
  sendNewUserDataToDb(user: UserRegister){
    const headers = { 'content-type': 'application/json'};
    console.log(user)
    return this.http.post<UserRegister>(this.dbUrl, user, {headers})
  }

  sendLoginDataToDb(user : UserLogin){
    const headers = { 'content-type': 'application/json'};
    console.log(user)
    return this.http.post<UserLogin>(this.dbUrl, user, {headers})
  }

  sendLogInFormValues(loginData: ɵTypedOrUntyped<{
    password: ɵElement<(string | ((control: AbstractControl) => (ValidationErrors | null)))[], null>;
    username: ɵElement<(string | ((control: AbstractControl) => (ValidationErrors | null)))[], null>
  }, ɵFormGroupValue<{
    password: ɵElement<(string | ((control: AbstractControl) => (ValidationErrors | null)))[], null>;
    username: ɵElement<(string | ((control: AbstractControl) => (ValidationErrors | null)))[], null>
  }>, any>) {
    const headers = { 'content-type': 'application/json'};
    console.log(loginData)
    return this.http.post<UserLogin>(this.singInUrl, loginData, {headers})
  }
}

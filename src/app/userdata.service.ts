import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {UserJwt, UserLogin, UserRegister} from "./user-interface";

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  private dbUrl: string = '/api/v1/users';
  private logInUrl: string = '/login';
  private logOutUrl: string = '/logout';

  constructor(private http: HttpClient,) { }
  registerNewUser(user: UserRegister){
    const headers = { 'content-type': 'application/json'};
    console.log(user)
    return this.http.post<UserRegister>(this.dbUrl, user, {headers})
  }

  userLogIn(user : UserLogin){
    const headers = { 'content-type': 'application/json'};
    //console.log(user, 'login data von frontend')
    const params = new HttpParams().append("username", user.username ).append("password", user.password)
    return this.http.post<UserJwt>(this.logInUrl, user, {headers,params})
  }

  userLogOut(token: string){
    const headers = { 'content-type': 'application/json'};
    //return this.http.post<String>(this.logOutUrl, token, {headers})
    localStorage.removeItem('token');
  }
}

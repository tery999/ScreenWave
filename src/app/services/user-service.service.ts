import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Users } from '../interfaces/Users';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor( private http: HttpClient) { }

  loginUser(loginInfo:Users) {
    const loginURL = "http://localhost:3030/Users/Login";
    return this.http.post(loginURL,loginInfo)

  }

  registerUser(loginInfo:Users) {
    const loginURL = "http://localhost:3030/Users/Register";
    return this.http.post(loginURL,loginInfo)

  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor( private http: HttpClient) { }

  loginUser() {
    const loginURL = "http://localhost:3030/Users/Login"

  }
}

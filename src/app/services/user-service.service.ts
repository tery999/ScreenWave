import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Users } from '../interfaces/Users';
import { BehaviorSubject , Observable, tap , of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor( private http: HttpClient ) { 
    this.userObservable.subscribe ( (user) => {
      this.user = user;
    })
  }

  userSubject = new BehaviorSubject<any>(undefined);
  userObservable = this.userSubject.asObservable();
  user:any = undefined;

  get getUserId():string{
    return this.user.userId;
  }

  get userToken():string {
    return this.user.token;
  }

  checkLoggedIn():boolean {
    return !!this.user
  }

  loginUser(loginInfo:Users) {
    debugger;
    const loginURL = "http://localhost:3030/Users/Login";
    return this.http.post(loginURL,loginInfo).pipe
    (tap( (token) => {
      this.userSubject.next(token);
      })
    )

  }

  registerUser(loginInfo:Users) {
    const loginURL = "http://localhost:3030/Users/Register";
    return this.http.post(loginURL,loginInfo)

  }

  logoutUser() {
    this.userSubject.next(undefined);
  }

}

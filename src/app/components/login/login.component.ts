import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { trimValidator } from '../add-movie-page/AddMovieCustomVal';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/services/user-service.service';
import { Users } from 'src/app/interfaces/Users';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor( private fb: FormBuilder, private router: Router, private userService: UserServiceService){

  }

  loginForm = this.fb.group ( {
    name: ["", [Validators.required, trimValidator, Validators.maxLength(20)]],
    password: ["", [Validators.required, trimValidator, Validators.maxLength(30), Validators.minLength(5)]],
    // otherwise it deprecates the group. Dont know why, but this fixes it
  } )

  isSubmitted:boolean = false;
  serverReturnedError:string ="";

  get name(){
    return this.loginForm.get("name");
   }
  get password(){
    return this.loginForm.get("password")
  }


  onSubmit(){
    this.isSubmitted = true;
    if (this.loginForm.valid) {
      const regBody: Users = { 
        username: this.name?.value as unknown as string,
        password: this.password?.value as unknown as string
      }
      console.log("FE REG INFO IS", regBody);
      // this.userService.registerUser(regBody).subscribe( {
      //   next: (token) => {
      //     console.log("RETURNED TOKEN",token)
      //   },
      //   error: (err) => {
      //     console.log("RETURNED ERROR", err.error.message);
      //     this.serverReturnedError = err.error.message;
      //   }
       
      // })
    }
  }
  
}


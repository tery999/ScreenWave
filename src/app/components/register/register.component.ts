import { Component } from '@angular/core';
import { AbstractControlOptions, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { trimValidator } from '../add-movie-page/AddMovieCustomVal';
import { comparePasswords } from './ValidatorComparePass';
import { Users } from 'src/app/interfaces/Users';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor( private fb: FormBuilder, private router: Router, private userService: UserServiceService){

  }

  registerForm = this.fb.group ( {
    name: ["", [Validators.required, trimValidator, Validators.maxLength(20)]],
    password: ["", [Validators.required, trimValidator, Validators.maxLength(30), Validators.minLength(5)]],
    rePassword: ["", [Validators.required, trimValidator]],
    // otherwise it deprecates the group. Dont know why, but this fixes it
  }, { validator: comparePasswords} as AbstractControlOptions)

  isSubmitted:boolean = false;

  get name(){
    return this.registerForm.get("name");
   }
  get password(){
    return this.registerForm.get("password")
  }
  get rePassword(){
    return this.registerForm.get("rePassword")
  }

  onSubmit(){
    this.isSubmitted = true;
    if (this.registerForm.valid) {
      const regBody: Users = { 
        username: this.name?.value as unknown as string,
        password: this.password?.value as unknown as string
      }
      console.log("FE REG INFO IS", regBody);
      this.userService.registerUser(regBody).subscribe( (token)=> {
        console.log("TOKEN RETURNED IS", token)
      })
    }
  }
  
}

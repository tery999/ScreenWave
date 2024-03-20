import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { trimValidator } from '../add-movie-page/AddMovieCustomVal';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor( private fb: FormBuilder, private router: Router){

  }

  registerForm = this.fb.group ( {
    name: ["", [Validators.required, trimValidator, Validators.maxLength(20)]],
    password: ["", [Validators.required, trimValidator, Validators.maxLength(30), Validators.minLength(5)]],
    rePassword: ["", [Validators.required, trimValidator]]
  })

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
  }
  
}

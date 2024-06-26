import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Movies } from 'src/app/interfaces/Movies';
import { MovieServiceService } from 'src/app/services/movie-service.service';
import { minusValidator, trimValidator } from './AddMovieCustomVal';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/services/user-service.service';


@Component({
  selector: 'app-add-movie-page',
  templateUrl: './add-movie-page.component.html',
  styleUrls: ['./add-movie-page.component.css']
})
export class AddMoviePageComponent {
 constructor ( private fb:FormBuilder, private movieService: MovieServiceService , private router:Router,
  private userService: UserServiceService) {

 }

 addMovieForm = this.fb.group({
  // NEED CUSTOMER VALIDATOR - required allows empty space. Doesnt automaticly trim it >:( 
  name: ["", [Validators.required, trimValidator, Validators.maxLength(30)]],
  picture: ["", [Validators.required, trimValidator]],
  genre:["", [Validators.required, trimValidator,Validators.maxLength(30)]],
  year: ["", [Validators.required, minusValidator, Validators.minLength(4), Validators.maxLength(4)]],
  summary:["", [Validators.required, Validators.maxLength(8000)]],
  actors: "",
  director: ""
 })

 isSubmitted:boolean = false;
 validSend:boolean = false;

 //for ease of use, not to type to full name in the template
 get name(){
  return this.addMovieForm.get("name");
 }

 get picture(){
  return this.addMovieForm.get("picture");
 }

 get genre(){
  return this.addMovieForm.get("genre");
 }

 get year(){
  return this.addMovieForm.get("year");
 }

 get summary(){
  return this.addMovieForm.get("summary");
 }

 userId = this.userService.getUserId;

 onSubmit() {
  this.isSubmitted = true;
  console.log(this.addMovieForm.getRawValue());
  if ( this.addMovieForm.valid ) {
    this.validSend = true;
    const body:Movies = {...this.addMovieForm.value as unknown as Movies , ownerId: this.userId};
    this.movieService.addMovie(body).subscribe( (info)=> console.log("SUCCESS", info));
    setTimeout(() => {
      this.router.navigateByUrl("/Catalog");
    }, 500);
  }
 }

}

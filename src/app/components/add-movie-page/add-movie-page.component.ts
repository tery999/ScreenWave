import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Movies } from 'src/app/interfaces/Movies';
import { MovieServiceService } from 'src/app/services/movie-service.service';

@Component({
  selector: 'app-add-movie-page',
  templateUrl: './add-movie-page.component.html',
  styleUrls: ['./add-movie-page.component.css']
})
export class AddMoviePageComponent {
 constructor ( private fb:FormBuilder, private movieService: MovieServiceService) {

 }

 addMovieForm = this.fb.group({
  name: ["", Validators.required],
  picture: ["", Validators.required],
  genre:["", Validators.required],
  year: ["", [Validators.required, Validators.minLength(4)]],
  summary: "",
  actors: "",
  director: ""
 })

 isSubmitted:boolean = false;

 get name(){
  return this.addMovieForm.get("name");
 }

 onSubmit() {
  this.isSubmitted = true;
  console.log(this.addMovieForm.getRawValue());
  const body:Movies = this.addMovieForm.value as unknown as Movies;
  this.movieService.addMovie(body).subscribe( (info)=> console.log("SUCCESS", info));
 }

}

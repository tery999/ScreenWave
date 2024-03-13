import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-movie-page',
  templateUrl: './add-movie-page.component.html',
  styleUrls: ['./add-movie-page.component.css']
})
export class AddMoviePageComponent {
 constructor ( private fb:FormBuilder) {

 }

 addMovieForm = this.fb.group({
  name: ["", Validators.required],
  genre:["", Validators.required],
  year: ["", Validators.required, Validators.minLength(4)],
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
 }

}

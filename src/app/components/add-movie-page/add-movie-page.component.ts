import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-movie-page',
  templateUrl: './add-movie-page.component.html',
  styleUrls: ['./add-movie-page.component.css']
})
export class AddMoviePageComponent {
 constructor ( private fb:FormBuilder) {

 }

 addMovieForm = this.fb.group({
  name: "",
  genre: "",
  year: "" ,
  summary: "",
  actors: "",
  director: ""
 })

 onSubmit() {
  console.log(this.addMovieForm.getRawValue());
 }

}

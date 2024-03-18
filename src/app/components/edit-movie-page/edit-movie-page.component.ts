import { Component, OnInit } from '@angular/core';
import { FormBuilder , Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieServiceService } from 'src/app/services/movie-service.service';
import { trimValidator } from './EditMovieCustomVal';
import { Movies } from 'src/app/interfaces/Movies';

@Component({
  selector: 'app-edit-movie-page',
  templateUrl: './edit-movie-page.component.html',
  styleUrls: ['./edit-movie-page.component.css']
})
export class EditMoviePageComponent implements OnInit {
  constructor ( private fb:FormBuilder, 
    private movieService: MovieServiceService , 
    private router:Router , private route:ActivatedRoute ) {
  }

  editMovieForm = this.fb.group({
    // NEED CUSTOMER VALIDATOR - required allows empty space. Doesnt automaticly trim it >:( 
    name: ["", [Validators.required, trimValidator, Validators.maxLength(30)]],
    picture: ["", [Validators.required, trimValidator]],
    genre:["", [Validators.required, trimValidator,Validators.maxLength(30)]],
    year: [0, [Validators.required, Validators.minLength(4), Validators.maxLength(4)]],
    summary:["", Validators.required],
    actors: "",
    director: ""
   })
  
   isSubmitted:boolean = false;
  
   //There should be an easier way that typing all value's get manually
   get name(){
    return this.editMovieForm.get("name");
   }
  
   get picture(){
    return this.editMovieForm.get("picture");
   }
  
   get genre(){
    return this.editMovieForm.get("genre");
   }
  
   get year(){
    return this.editMovieForm.get("year");
   }

   get summary(){
    return this.editMovieForm.get("summary");
   }
  
   get actors(){
    return this.editMovieForm.get("actors");
   }

   get director(){
    return this.editMovieForm.get("director");
   }

   onSubmit() {
    this.isSubmitted = true;
    console.log(this.editMovieForm.getRawValue());
    if ( this.editMovieForm.valid ) {
      const body:Movies = this.editMovieForm.value as unknown as Movies;
      this.movieService.addMovie(body).subscribe( (info)=> console.log("SUCCESS", info));
      this.router.navigateByUrl("/Catalog");
    }
   }

   ngOnInit(): void {
    const currentId = this.route.snapshot.params["id"];
    this.movieService.getOneMovie(currentId).subscribe( (movieData)=> {
      this.editMovieForm.patchValue(movieData)
    })
   }
}

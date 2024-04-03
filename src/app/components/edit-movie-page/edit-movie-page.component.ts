import { Component, OnInit } from '@angular/core';
import { FormBuilder , Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieServiceService } from 'src/app/services/movie-service.service';
import { minusValidator, trimValidator } from './EditMovieCustomVal';
import { Movies } from 'src/app/interfaces/Movies';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-edit-movie-page',
  templateUrl: './edit-movie-page.component.html',
  styleUrls: ['./edit-movie-page.component.css']
})
export class EditMoviePageComponent implements OnInit {
  constructor ( private fb:FormBuilder, 
    private movieService: MovieServiceService , 
    private router:Router , private route:ActivatedRoute , private userService: UserServiceService) {
  }

  editMovieForm = this.fb.group({
    // NEED CUSTOMER VALIDATOR - required allows empty space. Doesnt automaticly trim it >:( 
    name: ["", [Validators.required, trimValidator, Validators.maxLength(30)]],
    picture: ["", [Validators.required, trimValidator]],
    genre:["", [Validators.required, trimValidator,Validators.maxLength(30)]],
    year: [0, [Validators.required, Validators.minLength(4), Validators.maxLength(4), minusValidator]],
    summary:["", [Validators.required, Validators.maxLength(8000)]],
    actors: "",
    director: ""
   })
  
   isSubmitted:boolean = false;
   validSend:boolean = false;
    MovieId: string = ""
    userId:string = this.userService.getUserId;
  
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
    debugger;
    this.isSubmitted = true;
    console.log(this.editMovieForm.getRawValue());
    if ( this.editMovieForm.valid ) {
      this.validSend = true;
      const body:Movies = this.editMovieForm.value as unknown as Movies;
      this.movieService.editMovie(body, this.MovieId).subscribe( (info)=> console.log("SUCCESS", info));
      setTimeout(() => {
        this.router.navigateByUrl(`/Movies/${this.MovieId}`);
      }, 500);
    }
   }

   ngOnInit(): void {
    const currentId = this.route.snapshot.params["id"];
    this.movieService.getOneMovie(currentId).subscribe( (movieData)=> {
      this.editMovieForm.patchValue(movieData)
      this.MovieId = movieData._id as string;
      if (movieData.ownerId !== this.userId) {
        this.router.navigateByUrl('/Catalog');
      }
      // console.log("Check Movie Id", movieData._id);
      // console.log("Check MovieId", this.MovieId);
    })
   }
}

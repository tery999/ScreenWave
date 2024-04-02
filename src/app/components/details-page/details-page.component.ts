import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movies } from 'src/app/interfaces/Movies';
import { MovieServiceService } from 'src/app/services/movie-service.service';
import { faCalendarDays, faEye , faEyeSlash} from '@fortawesome/free-solid-svg-icons';
import { UserServiceService } from 'src/app/services/user-service.service';
import { FormBuilder, Validators } from '@angular/forms';
import { trimValidator } from '../add-movie-page/AddMovieCustomVal';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.css']
})
export class DetailsPageComponent implements OnInit{
  faCalendarDays = faCalendarDays;
  faEye = faEye;
  faEyeSlash = faEyeSlash;
  currentMovie: Movies|undefined;
  // need to add check if subscription is done/hasError, otherwise the "MovieDoesntExist" photo is shown in the 
  //beginning for a split second
  isLoaded: boolean = false;
  movieId: string = "";
  summary:string = "";
  currentUserId:string|null = "";
  seeMore:boolean = false;
  hasWatched:boolean = false;
  hasError:boolean = false;

  constructor(private route:ActivatedRoute , 
    private movieService:MovieServiceService , 
    private router: Router , 
    private userService:UserServiceService,
    private fb: FormBuilder) {
  }

  seeMoreClickFunction() {
    console.log("Button Clicked");
    this.seeMore = !this.seeMore;
    console.log("CHECK THE USER ID", this.currentUserId)
  }

  deleteMovieFunction() {
    const deleteId = this.currentMovie?._id as string;
    this.movieService.deleteMovie(deleteId).subscribe();
    this.router.navigateByUrl("/Catalog")
  }

  addToWatchFunc() {
    const currentMovieId:string = this.movieId;
    const currentUserId:string = this.currentUserId as string;
    this.movieService.addToWatched(currentMovieId, currentUserId).subscribe();
    this.hasWatched = !this.hasWatched;
  }

  ngOnInit(): void {
    this.currentUserId = this.userService.getUserId;
    const currentId = this.route.snapshot.params["id"];
    this.movieService.getOneMovie(currentId).subscribe ( (movie) => {
      if(movie === null) {
        console.log("THERE WAS ERROR, NO MOVIE NAME")
        this.hasError = true;
      }
      this.currentMovie = movie;
      this.summary = this.currentMovie.summary as string
      this.movieId = this.currentMovie._id as string
      if (movie.watchedCounter?.includes(this.currentUserId as string)) {
        this.hasWatched = true
      } else {
        this.hasWatched = false
      }
      
    },(error) => {
      console.log("THERE WAS ERROR")
      this.isLoaded = true;
      this.hasError = true;
    }
    )
  }
}

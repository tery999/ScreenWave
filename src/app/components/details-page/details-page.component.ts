import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movies } from 'src/app/interfaces/Movies';
import { MovieServiceService } from 'src/app/services/movie-service.service';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.css']
})
export class DetailsPageComponent implements OnInit{
  faCalendarDays = faCalendarDays;
  currentMovie: Movies|undefined;
  // need to add check if subscription is done/hasError, otherwise the "MovieDoesntExist" photo is shown in the 
  //beginning for a split second
  isLoaded: boolean = false;
  movieId: string = "";

  summary:string = "";
  constructor(private route:ActivatedRoute , 
    private movieService:MovieServiceService , 
    private router: Router , 
    private userService:UserServiceService) {
  }

  currentUserId:string|null = "";

  seeMore:boolean = false;

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

  ngOnInit(): void {
    debugger;
    const currentId = this.route.snapshot.params["id"];
    this.movieService.getOneMovie(currentId).subscribe ( (movie) => {
      this.currentMovie = movie;
      this.summary = this.currentMovie.summary as string
      this.movieId = this.currentMovie._id as string
    },(error) => {
      this.isLoaded = true;
    }
    )
    this.currentUserId = this.userService.getUserId;
  }
}

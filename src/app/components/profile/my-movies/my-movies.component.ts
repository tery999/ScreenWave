import { Component, OnInit } from '@angular/core';
import { Movies } from 'src/app/interfaces/Movies';
import { MovieServiceService } from 'src/app/services/movie-service.service';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-my-movies',
  templateUrl: './my-movies.component.html',
  styleUrls: ['./my-movies.component.css']
})
export class MyMoviesComponent implements OnInit{
  constructor(private userService:UserServiceService, private movieService:MovieServiceService){}
  myMovies:Movies[] = [];
  userId:string = this.userService.getUserId;

  ngOnInit(): void {
    this.movieService.getOwnedMovies(this.userId).subscribe( (movies)=> {
      this.myMovies = movies;
    })
  }
}

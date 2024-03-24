import { Component, OnInit } from '@angular/core';
import { Movies } from 'src/app/interfaces/Movies';
import { MovieServiceService } from 'src/app/services/movie-service.service';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  constructor(private movieService:MovieServiceService) {}
  randomMovie?:Movies;

  ngOnInit(): void {
    this.movieService.randomMovie().subscribe ( (movie)=> {
      this.randomMovie = movie;
    })
  }
}

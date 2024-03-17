import { Component, OnInit } from '@angular/core';
import { Movies } from 'src/app/interfaces/Movies';
import { MovieServiceService } from 'src/app/services/movie-service.service';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
  faMagnifyingGlass = faMagnifyingGlass;

  Allmovies: Movies[]=[];
  currentMovies: any[] = [];
  searchMovie: string = "hi";

  onClickSearch() {
    debugger;
    if(this.searchMovie.trim() === "") {
      this.currentMovies = this.Allmovies;
    } else {
      this.currentMovies = this.Allmovies.filter ( (movie) => movie.name.toLowerCase().includes(this.searchMovie.toLowerCase() ));
      console.log("ALL MOVIES ARR", this.Allmovies);
      console.log("CUR MOVIES ARR", this.currentMovies);
    }
  }

  constructor ( private movieService: MovieServiceService) {}

  ngOnInit(): void {
    this.movieService.getAllMovies().subscribe( (movies) => {
      this.Allmovies = movies
      this.currentMovies = movies
    })
  }
}


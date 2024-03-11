import { Component, OnInit } from '@angular/core';
import { Movies } from 'src/app/interfaces/Movies';
import { MovieServiceService } from 'src/app/services/movie-service.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  Allmovies: Movies[]=[];

  constructor ( private movieService: MovieServiceService) {}

  ngOnInit(): void {
    this.movieService.getAllMovies().subscribe( (movies) => this.Allmovies = movies)
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movies } from 'src/app/interfaces/Movies';
import { MovieServiceService } from 'src/app/services/movie-service.service';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.css']
})
export class DetailsPageComponent implements OnInit{
  currentMovie: Movies|undefined;
  constructor(private route:ActivatedRoute , private movieService:MovieServiceService) {

  }
  ngOnInit(): void {
    const currentId = this.route.snapshot.params["id"];
    this.movieService.getOneMovie(currentId).subscribe ( (movie) => {
      this.currentMovie = movie;
    })
  }
}

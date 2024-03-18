import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movies } from 'src/app/interfaces/Movies';
import { MovieServiceService } from 'src/app/services/movie-service.service';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.css']
})
export class DetailsPageComponent implements OnInit{
  faCalendarDays = faCalendarDays;
  currentMovie: Movies | undefined;
  summary:string = "";
  constructor(private route:ActivatedRoute , private movieService:MovieServiceService) {

  }

  seeMore:boolean = false;

  seeMoreClickFunction() {
    console.log("Button Clicked");
    this.seeMore = !this.seeMore;
  }

  ngOnInit(): void {
    const currentId = this.route.snapshot.params["id"];
    this.movieService.getOneMovie(currentId).subscribe ( (movie) => {
      this.currentMovie = movie;
      this.summary = this.currentMovie.summary as string
    })
  }
}

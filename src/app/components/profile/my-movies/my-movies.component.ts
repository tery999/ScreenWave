import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movies } from 'src/app/interfaces/Movies';
import { MovieServiceService } from 'src/app/services/movie-service.service';
import { UserServiceService } from 'src/app/services/user-service.service';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-my-movies',
  templateUrl: './my-movies.component.html',
  styleUrls: ['./my-movies.component.css']
})
export class MyMoviesComponent implements OnInit {
  faPlus = faPlus;
  constructor(private userService: UserServiceService, private movieService: MovieServiceService,
    private router: Router) { }
  myMovies: Movies[] = [];
  userId: string = this.userService.getUserId;

  addRedirectFunc() {
    this.router.navigateByUrl(`AddMovie`);
  }

  ngOnInit(): void {
    this.movieService.getOwnedMovies(this.userId).subscribe((movies) => {
      this.myMovies = movies;
    })
  }
}

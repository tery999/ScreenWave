import { Component, Input } from '@angular/core';
import { Movies } from 'src/app/interfaces/Movies';

@Component({
  selector: 'app-movie-list-component',
  templateUrl: './movie-list-component.component.html',
  styleUrls: ['./movie-list-component.component.css']
})
export class MovieListComponentComponent {
  @Input() movie!: Movies;
}

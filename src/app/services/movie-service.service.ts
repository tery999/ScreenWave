import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movies } from '../interfaces/Movies';
import { HttpClient } from '@angular/common/http';
import { json, text } from 'express';

@Injectable({
  providedIn: 'root'
})
export class MovieServiceService {
  baseURL = "http://localhost:3030/Movies"

  constructor(private http: HttpClient) { }

  getAllMovies(): Observable<Movies[]> {
    return this.http.get<Movies[]>(this.baseURL);
  }

  addMovie(movie:Movies) {
    // debugger;
    console.log("SERVICE CHECK BODY", movie);

    return this.http.post(this.baseURL + "/Add", movie , {responseType:"text"});
  }

  getOneMovie ( id:string) {
    const urlMovieId = this.baseURL+`/${id}`
    return this.http.get<Movies>( urlMovieId);
  }

  editMovie ( movie:Movies, _id:string) {
    const urlMovieId = this.baseURL+`/Edit/${_id}`
    console.log(" THE URL IS" , urlMovieId);
    return this.http.put<Movies>(urlMovieId, movie );
  }

  deleteMovie (id:string) {
    const urlMovieId = this.baseURL+`/Delete/${id}`
    return this.http.delete(urlMovieId);
  }

  randomMovie() {
    const randomURL = this.baseURL+`/Random`;
    return this.http.get<Movies>(randomURL);
  }
}

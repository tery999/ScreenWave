import { Injectable } from '@angular/core';
import { Observable, filter, map } from 'rxjs';
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

  getOwnedMovies( ownerId: string) {
    const URL = this.baseURL+`/Owned/${ownerId}`
    return this.http.get<Movies[]>(URL);
  }

  getWatchList( userId:string) {
    // try with pipe filtration, instead of doing it on the BE
    return this.http.get<Movies[]>(this.baseURL).pipe(
      map(movies => movies.filter( movie => movie.watchedCounter?.includes(userId)))
    );
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

  addToWatched(currentMovieId:string, currentUserId:string) {
    console.log("CURRENT MOVIE ID", currentMovieId)
    console.log("CURRENT USER ID", currentUserId)
     const watchedURL =this.baseURL+`/Watched/${currentMovieId}`
     return this.http.put(watchedURL, {currentUserId})
  }
}

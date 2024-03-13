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

  addMovie(movie:any) {
    // debugger;
    console.log("SERVICE CHECK BODY", movie);

    return this.http.post(this.baseURL + "/Add", movie , {responseType:"text"});
  }
}

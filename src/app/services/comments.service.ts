import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comments } from '../interfaces/Comments';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private http: HttpClient) { }

  getAllComments(movieId:string):Observable<Comments[]> {
    let id = movieId;
   const URL = `http://localhost:3030/Movies/Comments/${id}/All`
    return this.http.get<Comments[]>(URL);
  }

  addComment(comment:string, movieId:string, ownerId:string){
    console.log("MOVIE ID IS", movieId)
    let id = movieId;
    const URL = `http://localhost:3030/Movies/Comments/${id}/Add`
    const body = {
      comment:comment,
      owner:ownerId
    }
    return this.http.post(URL, body);
  }
}

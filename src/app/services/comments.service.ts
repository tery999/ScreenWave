import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private http: HttpClient) { }

  getAllComments() {
   const URL = "http://localhost:3030/Movies/Comments/All"
    return this.http.get(URL);
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

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comments } from '../interfaces/Comments';
import { UserServiceService } from './user-service.service';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private http: HttpClient, private userService: UserServiceService) { }

  getAllComments(movieId:string):Observable<Comments[]> {
    let id = movieId;
   const URL = `http://localhost:3030/Movies/Comments/${id}/All`
    return this.http.get<Comments[]>(URL);
  }

  addComment(comment:string, movieId:string, ownerId:string){
    console.log("MOVIE ID IS", movieId)
    let id = movieId;
    let username = this.userService.getUsername;
    const URL = `http://localhost:3030/Movies/Comments/${id}/Add`
    debugger;
    const body = {
      comment:comment,
      owner:ownerId,
      username:username,
    }
    return this.http.post(URL, body);
  }

  deleteComment(commentId:string, movieId:string) {
    debugger;
    let id = movieId;
    const URL = `http://localhost:3030/Movies/Comments/${id}/Delete`
    return this.http.put(URL, {commentId:commentId})
  }
}

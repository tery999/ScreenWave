import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { trimValidator } from '../../add-movie-page/AddMovieCustomVal';
import { CommentsService } from 'src/app/services/comments.service';
import { Comments } from 'src/app/interfaces/Comments';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  @Input() currentUserId!: string|undefined|null;
  // Not working, ngOnInit firing before input completes >:(
  // @Input() movieId!: string;
  movieId:string|undefined;
  allCurrentComments: Comments[] = [];
  constructor(private fb:FormBuilder , private commentService:CommentsService, private route:ActivatedRoute) {

  }
  addCommentForm = this.fb.group( {
    comment: ["", [Validators.required, trimValidator, Validators.maxLength(300)]],
  })
  isSubmitted:boolean = false;
  get comment(){
    return this.addCommentForm.get("comment");
   }
  
  addCommentFunc() {
    this.isSubmitted = true;
  console.log(this.addCommentForm.getRawValue());
  if ( this.addCommentForm.valid ) {
    let comment = this.addCommentForm.get("comment")?.value as unknown as string;
    let ownerId = this.currentUserId as string;
    let movieId = this.movieId as string;
    console.log("GIVEN INFORMATION IS commebt", comment);
    console.log("GIVEN INFORMATION IS ownerId", ownerId);
    console.log("GIVEN INFORMATION IS movieId", movieId);
    this.commentService.addComment(comment, movieId ,ownerId).subscribe();
  }
  }
  ngOnInit(): void {
    this.movieId= this.route.snapshot.params["id"];
    if ( this.movieId) {
      this.commentService.getAllComments(this.movieId).subscribe( (comments)=> {
        console.log("HERE ARE THE COMMENTS", comments);
        this.allCurrentComments = comments;
      })
    }
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { trimValidator } from '../../add-movie-page/AddMovieCustomVal';
import { CommentsService } from 'src/app/services/comments.service';
import { Comments } from 'src/app/interfaces/Comments';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  @Input() currentUserId!: string | undefined | null;
  // Not working, ngOnInit firing before input completes >:(
  // @Input() movieId!: string;
  movieId = this.route.snapshot.params["id"];
  constructor(private fb: FormBuilder, private commentService: CommentsService, private route: ActivatedRoute) {

  }
  //using async, because it should automaticly unsubscribe. Hopefully im using it correctly.
  allCurrentComments: Observable<Comments[]> = this.commentService.getAllComments(this.movieId as string);
  addCommentForm = this.fb.group({
    comment: ["", [Validators.required, trimValidator, Validators.maxLength(300)]],
  })
  isSubmitted: boolean = false;
  isLoading: boolean = false;
  get comment() {
    return this.addCommentForm.get("comment");
  }

  addCommentFunc() {
    this.isSubmitted = true;
    console.log(this.addCommentForm.getRawValue());
    if (this.addCommentForm.valid) {
      this.isLoading = true;
      let comment = this.addCommentForm.get("comment")?.value as unknown as string;
      let ownerId = this.currentUserId as string;
      let movieId = this.movieId as string;
      console.log("GIVEN INFORMATION IS commebt", comment);
      console.log("GIVEN INFORMATION IS ownerId", ownerId);
      console.log("GIVEN INFORMATION IS movieId", movieId);
      this.commentService.addComment(comment, movieId, ownerId).subscribe();
      // Its stupid to call all comments, whenever I add a new comment,
      // but this is the only solution I have right now
      setTimeout(() => {
        // Couldnt make it work with BehaviourSubject. Will use timeout for now, until I figure it out ;_;
        this.allCurrentComments = this.commentService.getAllComments(movieId);
        this.isLoading = false;
        this.addCommentForm.get("comment")?.setValue("");
      }, 500);
    }
  }

  deleteComFunc(commentId:string|undefined) {
    this.isLoading = true;
    this.commentService.deleteComment(commentId as string, this.movieId ).subscribe();
    setTimeout(() => {
      // Couldnt make it work with BehaviourSubject. Will use timeout for now, until I figure it out ;_;
      this.allCurrentComments = this.commentService.getAllComments(this.movieId);
      this.isLoading = false;
    }, 500);
  }
  ngOnInit(): void {
  }
}

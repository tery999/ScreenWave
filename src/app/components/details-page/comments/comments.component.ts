import { Component, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { trimValidator } from '../../add-movie-page/AddMovieCustomVal';
import { CommentsService } from 'src/app/services/comments.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent {
  @Input() currentUserId!: string|undefined|null;
  @Input() movieId!: string|undefined|null;
  constructor(private fb:FormBuilder , private commentService:CommentsService) {

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

}

import { Component, OnInit } from '@angular/core';
import { Movies } from 'src/app/interfaces/Movies';
import { MovieServiceService } from 'src/app/services/movie-service.service';
import { UserServiceService } from 'src/app/services/user-service.service';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-watch-list',
  templateUrl: './my-watch-list.component.html',
  styleUrls: ['./my-watch-list.component.css']
})
export class MyWatchListComponent implements OnInit {
 constructor(private movieService: MovieServiceService, 
  private userService: UserServiceService, private router:Router
  ){}
 watchList:Movies[] = [];
 userId:string = "";
 faInfoCircle = faInfoCircle;

 detailPageFuncClick(id:string|undefined) {
  let movieId = id as unknown as string
  this.router.navigateByUrl(`Movies/${movieId}`);
 }

 ngOnInit(): void {
  this.userId = this.userService.getUserId
   this.movieService.getWatchList(this.userId).subscribe( (value => {
    this.watchList = value;
   }))
 }
}

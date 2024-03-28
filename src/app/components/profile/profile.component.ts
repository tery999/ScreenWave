import { Component, OnInit } from '@angular/core';
import { MovieServiceService } from 'src/app/services/movie-service.service';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  constructor(private userService:UserServiceService, private movieService: MovieServiceService){}
  username:string = this.userService.getUsername;

}

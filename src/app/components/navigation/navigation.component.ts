import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit{
  isLoggedIn:boolean = false;
  constructor ( private userService: UserServiceService) {
  }


  logoutFunc() {
    console.log(this.isLoggedIn);
    this.userService.logoutUser();
    localStorage.removeItem("token");
  }

  ngOnInit(): void {
  this.userService.checkLoggedIn().subscribe ( (log)=> {
    this.isLoggedIn = log 
  })
  }
}

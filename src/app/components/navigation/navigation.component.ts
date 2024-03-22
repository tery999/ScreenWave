import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit{
  constructor ( private userService: UserServiceService) {}

  isLogged() {
    return this.userService.checkLoggedIn();
  }

  logoutFunc() {
    this.userService.logoutUser();
  }

  ngOnInit(): void {
  // this.userService.isLoggedIn().subscribe ( (info) => {
  //   console.log("RETURNED INFO", info)
  //   this.isLogged = info;
  // })
  }
}

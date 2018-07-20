import { Component } from '@angular/core';
import {UserService} from "./user/user.service";





@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[UserService]
})
export class AppComponent {
  title = 'app';
  users = [];

  constructor(private userService: UserService) {

  }
  ngOnInit() {
    // this.users = this.userService.users
    this.userService.getUsers().subscribe(users =>{
      this.users = users
    })
  }

}

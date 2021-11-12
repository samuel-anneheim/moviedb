import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/user';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.scss']
})
export class UsersPageComponent implements OnInit {

  users: User[] = []

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.usersService.getUser()
    .subscribe((users:User[])=>{
      this.users = users
    })
  }

}

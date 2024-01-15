import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { User } from '../../interfaces/user.interface';
import { RouterModule } from '@angular/router';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [
    CommonModule, RouterModule
  ],
  templateUrl: './userList.component.html',
  styleUrl: './userList.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserListComponent {

  constructor(private userService: UserService){}

  public userList = this.userService.userList;

  deleteUser(email: string){

   this.userList = this.userList.filter(user => user.email != email)
  }


}

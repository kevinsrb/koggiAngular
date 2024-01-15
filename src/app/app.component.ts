import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { UserListComponent } from './components/userList/userList.component';
import { AddUserComponent } from './components/addUser/addUser.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, UserListComponent, AddUserComponent, RouterModule, FormsModule],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'koggiAngular';
}

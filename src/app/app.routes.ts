import { Routes } from '@angular/router';
import { UserListComponent } from './components/userList/userList.component';
import { AddUserComponent } from './components/addUser/addUser.component';

export const routes: Routes = [
  { path: '', component: UserListComponent },
  { path: 'agregar', title: 'add User', component: AddUserComponent },
  { path: 'editar/:email', title: 'add User', component: AddUserComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },

]

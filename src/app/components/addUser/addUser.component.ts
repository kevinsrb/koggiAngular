import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { User } from '../../interfaces/user.interface';
import { UserService } from '../../service/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './addUser.component.html',
  styleUrl: './addUser.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddUserComponent {

  formUser: FormGroup;

  constructor( private fb: FormBuilder, private userService: UserService, private router: Router ){
    this.formUser = this.fb.group({
      name: [ '', Validators.required ],
      email: [ '', Validators.required ],
      image: [ '', Validators.required ],
    })
  }

  agregarUser(){

    const usuario: User = {
      name: this.formUser.get('name')?.value,
      email: this.formUser.get('email')?.value,
      image: this.formUser.get('image')?.value
    }

    this.userService.addUser(usuario)

    this.router.navigateByUrl("/");
  }


 }

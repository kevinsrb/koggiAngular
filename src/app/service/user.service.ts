import { Injectable } from '@angular/core';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public userList: User[] = [
    { name: 'kevin', email: 'kevinsrb@gmail.com', image: 'https://s3.eu-west-1.amazonaws.com/redsys-prod/articles/679210935de42a1be6065252/images/teaserImage_xx_angular_header_1699351460248_1699362954921.png' },
    { name: 'prueba', email: 'prueba@gmail.com', image: 'https://s3.eu-west-1.amazonaws.com/redsys-prod/articles/679210935de42a1be6065252/images/teaserImage_xx_angular_header_1699351460248_1699362954921.png' },
  ]

  constructor() { }


  addUser(user: User){
    this.userList.push(user)
  }

}

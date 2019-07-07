import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { User } from '../models/User';
import { of } from 'rxjs';

@Injectable()
export class UserService {
  users: User[];
  data: Observable<any>;

  constructor() { 
    this.users = [
      {
        firstName: 'John',
        lastName: 'Doe',
        age: 70,
        email:'johndoe@gmail.com',
        isActive: true,
        registered: new Date('01/02/2018 08:30:00'),
        hide:true
      },
      {
        firstName: 'Kevin',
        lastName: 'Johnson',
        age: 25,
        email:'kevinjohnson@gmail.com',
        isActive: false,
        registered: new Date('03/11/2017 06:20:00'),
        hide:true
      },
      {
        firstName: 'Karen',
        lastName: 'Williams',
        age: 21,
        email:'karenwilliams@gmail.com',
        isActive: true,
        registered: new Date('11/02/2016 10:30:00'),
        hide: true
      }
    ];
  }

  getData() {
    this.data = new Observable(observer => {
      setTimeout(() => {
          observer.next(1)
        }, 1000);
          
      setTimeout(() => {
          observer.next(2)
        }, 2000);

      setTimeout(() => {
          observer.next(3)
        }, 3000);

      setTimeout(() => {
        observer.next({name :'dana'})
        }, 4000);

    });

    return this.data;
  }

  getUsers(): Observable<User[]> {
    return of(this.users);
  }

  addUser(user: User) {
    this.users.unshift(user);
  }


}

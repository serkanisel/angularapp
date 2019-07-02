import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';
import { NullInjector } from '@angular/core/src/di/injector';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  
user: User = {
    firstName: '',
    lastName: '',
    age: null,
    address: {
      street: '',
      city: '',
      state: ''
    },
    hide:false
  }
  users: User[];
  showExtended: boolean = true;
  loaded: boolean = true;
  enabledAdd: boolean = false;
  showUserForm: boolean = false;

  constructor() { }

  ngOnInit() {
      this.users = [
        {
          firstName: 'John',
          lastName: 'Doe',
          age: 70,
          address: {
              city: 'Boston',
              state: 'MA',
              street: '50 Main St'
          },
          isActive: true,
          registered: new Date('01/02/2018 08:30:00'),
          hide:true
        },
        {
          firstName: 'Kevin',
          lastName: 'Johnson',
          age: 25,
          address: {
              city: 'New York',
              state: 'NY',
              street: 'Empire St 21.'
          },
          isActive: false,
          registered: new Date('03/11/2017 06:20:00'),
          hide:true
        },
        {
          firstName: 'Karen',
          lastName: 'Williams',
          age: 21,
          address: {
              city: 'Miami',
              state: 'FL',
              street: '45 School St'
          },
          isActive: true,
          registered: new Date('11/02/2016 10:30:00'),
          hide: true
        }
      ];


      // this.addUser(
      //   {
      //     firstName: 'David',
      //     lastName: 'Jackson'
      //   }
      // );

      this.loaded = true;
    }

    addUser() {
      this.user.isActive =true;
      this.user.registered=new Date();
      this.users.unshift(this.user);

      this.user = {
        firstName: '',
        lastName: '',
        age: null,
        address: {
          street: '',
          city: '',
          state: ''
        },
        hide:false
      }
    }

    fireEvent(e) {
      console.log(e.type);
    }

    onSubmit() {
      console.log(123);
    }
    // toogleHide(user: User) {
    //   user.hide = !user.hide;
    // }
}

import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {
    user: User;

    constructor() {

     }

    ngOnInit() {
        this.user = {
            firstName: 'Dana',
            lastName: 'Veli',
            age: 30,
            email:'danaveli@gmail.com',
            hide: false
        };
     }
}
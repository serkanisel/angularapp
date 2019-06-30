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
            address: {
                city: 'Boston',
                state: 'MA',
                street: '50 Main St'
            }
        };
     }
}
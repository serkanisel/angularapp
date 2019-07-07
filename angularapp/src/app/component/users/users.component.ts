import { Component, OnInit ,ViewChild} from '@angular/core';
import { User } from '../../models/User';
import { UserService } from '../../services/user.service';

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
    email:'',
    hide:false
  }
  users: User[];
  showExtended: boolean = true;
  loaded: boolean = true;
  enabledAdd: boolean = false;
  showUserForm: boolean = false;
  @ViewChild('userForm') form: any;
  data: any;

  constructor(private dataService: UserService) { }

  ngOnInit() {
     this.dataService.getData().subscribe(at => {
       console.log(at);
     });
     this.dataService.getUsers().subscribe(users => {
       this.users=users;
       this.loaded = true;
      });
    }

    // addUser() {
    //   this.user.isActive =true;
    //   this.user.registered=new Date();
    //   this.users.unshift(this.user);

    //   this.user = {
    //     firstName: '',
    //     lastName: '',
    //     age: null,
    //     email: '',
    //     hide:false
    //   }
    // }

    fireEvent(e) {
      console.log(e.type);
    }

    onSubmit({value,valid} : {value: User, valid: boolean}) {
      if(!valid) {
        console.log('Form is not valid');
      }
      else {
          value.isActive =true;
          value.registered=new Date();
          value.hide= true;

        this.dataService.addUser(value);

        this.form.reset();
      }
    }
    // toogleHide(user: User) {
    //   user.hide = !user.hide;
    // }
}

import { Component, OnInit } from '@angular/core';
import { IUser } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: IUser[] = [];
  currentUser: any = {
    name: '',
    address: ''

  }
  constructor(private service: UserService) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    return this.service.getUsers().subscribe(next => (this.users = next), error => (this.users = []));
  }

  getUserById(id) {
    return this.service.getUserById(id);
  }

  deleteUser(id: any) {
    debugger
    if(window.confirm('Are you sure?')){
      this.service.deleteUser(id).subscribe(res => {
        this.getUser();
      }, error => window.alert('errorr'));
    }
    
  }
  

}

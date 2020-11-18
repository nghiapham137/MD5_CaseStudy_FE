import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IUser } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-edit-form',
  templateUrl: './user-edit-form.component.html',
  styleUrls: ['./user-edit-form.component.css']
})
export class UserEditFormComponent implements OnInit {
 id:any;
  currentUser: any = {
    name: "",
    address: ""
  }
  constructor(private service: UserService, private route: ActivatedRoute) {
    this.id = this.route.snapshot.params.id;
    this.getUserById(this.id);
  }
  
  ngOnInit(): void {
  }

  updateUser() {
    this.service.updateUser(this.id, this.currentUser)
    .subscribe(res => {
      this.currentUser = res;
    }, error => window.alert('errorr'));
  }
  getUserById(id) {
    this.service.getUserById(id)
        .subscribe(res => {
          this.currentUser = res;
        }, error => window.alert('errorr'));
  }
  

}

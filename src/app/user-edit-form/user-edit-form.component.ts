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
  id: any = this.route.snapshot.params['id'];
  currentUser: any = {
    name: "",
    address: ""
  }
  constructor(private service: UserService, private route: ActivatedRoute) { }
  
  ngOnInit(): void {
    console.log(this.id);
    this.service.getUserById(this.id).subscribe(data=> {
      this.currentUser = data;
    })
  }

  updateUser() {
    this.service.updateUser(this.currentUser);
  }

  

}

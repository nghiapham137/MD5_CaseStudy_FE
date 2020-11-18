import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { error } from 'protractor';
import { IUser } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-create-form',
  templateUrl: './user-create-form.component.html',
  styleUrls: ['./user-create-form.component.css']
})
export class UserCreateFormComponent implements OnInit {
  user: any = {
    name: "",
    address: ""
  }

  submitted = false;
  constructor(private service: UserService) { }

  ngOnInit(): void {
  }

  createUser() {
    this.service.createUser(this.user).subscribe(
      res=> {
        this.submitted = true;
        this.user.reset({
          name:'',
          address: ''
        })
      }, error=> {
        console.log(error);
      }
    );
  }

}

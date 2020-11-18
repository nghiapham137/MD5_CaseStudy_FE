import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  id: any;
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

  getUserById(id) {
    this.service.getUserById(id)
        .subscribe(res => {
          this.currentUser = res;
        }, error => window.alert('errorr'));
  }
}

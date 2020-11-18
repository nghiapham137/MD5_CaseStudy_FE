import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserListComponent} from './user-list/user-list.component';
import {UserDetailComponent} from './user-detail/user-detail.component';
import {UserCreateFormComponent} from './user-create-form/user-create-form.component';
import { UserEditFormComponent } from './user-edit-form/user-edit-form.component';



const routes: Routes = [ {
  path: '',
  component: UserListComponent
}, {
  path: 'user/create',
  component: UserCreateFormComponent
}, {
  path: 'user/edit/:id',
  component: UserEditFormComponent
}, {
  path: 'user/:id',
  component:UserDetailComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from './user';
import { map } from 'rxjs/operators';
import { idText } from 'typescript';



@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly API_URL = "http://localhost:8080/users";
  constructor(private httpClient: HttpClient) {}

  getUsers(count = 10): Observable<IUser[]> {
    return this.httpClient.get<IUser[]>(this.API_URL).pipe(map(response => response.filter((user, i)=> i < count)));
  }

  getUserById(id: number): Observable<IUser> {
    return this.httpClient.get<IUser>(`${this.API_URL}/${id}`);
  }

  createUser(user: Partial<IUser>): Observable<IUser> {
    return this.httpClient.post<IUser>(this.API_URL + "/create", user);
  }

  deleteUser(id: number) {
    return this.httpClient.delete<IUser>(this.API_URL + `/delete/${id}`);
  }

//   deleteUser= (id): Promise<Object> => {
//     return new Promise((resolve, reject) => {
//         let url = `http://localhost:8080/users/delete/${id}`;
//         this.httpClient.delete(url)
//             .subscribe(res => {
//                 resolve(res);
//             }, err => {
//                 reject(err);
//             })
//     })
// }

  updateUser(id: any, user: IUser): Observable<IUser> {
    return this.httpClient.put<IUser>(`${this.API_URL}/edit/${id}`, user);
  }
  
}

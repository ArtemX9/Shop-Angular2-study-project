import {Injectable} from '@angular/core';
import {User} from '../models/User';
import {Observable, of, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(
    private http: HttpClient
  ) {
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`http://localhost:3000/users`);
  }

  getUser(id: number): Observable<User> {
    return this.http.get<User>(`http://localhost:3000/users/${id}`).pipe(
      catchError(err => throwError('Error in getUser method'))
    );
  }

  addUser(user: User): Observable<User> {
    const url = 'http://localhost:3000/users',
      body = JSON.stringify(user),
      options = {
        headers: new HttpHeaders({'Content-Type': 'application/json'})
      };

    return this.http.post<User>(url, body, options);
  }
}

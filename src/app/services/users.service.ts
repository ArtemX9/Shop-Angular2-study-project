import {Injectable} from '@angular/core';
import {User} from '../models/User';
import {Observable, of, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private users = [
    new User(1, 'Admin', 'Admin', 'Russia, SPb', true)
  ];

  private users$: Observable<User[]> = of(this.users);

  constructor() {
  }

  getUsers(): Observable<User[]> {
    return this.users$;
  }

  getUser(id: number): Observable<User> {
    return this.getUsers().pipe(
      map(users => users.find(user => user.id === id)),
      catchError(err => throwError('Error in getUser method'))
    );
  }

  addUser(user: User): void {
    this.users.push(user);
  }
}

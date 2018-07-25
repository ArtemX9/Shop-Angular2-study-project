import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {delay, map} from 'rxjs/operators';
import {UsersService} from '../../services/users.service';
import {User} from '../../models/User';

@Injectable()
export class AuthService {
  isLoggedIn = false;

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  login(userName: string): Observable<boolean> {
    return this.usersService.getUsers().pipe(
      delay(1000),
      map((users: User[]) => {
        const user = users.find(probableUser => probableUser.name === userName);
        this.isLoggedIn = user && user.isAdmin;
        return this.isLoggedIn;
      })
    );
  }

  logout(): void {
    this.isLoggedIn = false;
  }
  constructor(private usersService: UsersService) { }
}

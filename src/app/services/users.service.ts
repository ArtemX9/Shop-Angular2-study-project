import {Injectable} from '@angular/core';
import {User} from '../models/User';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AppSettingsService} from './app-settings.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(
    private http: HttpClient,
    private appSettings: AppSettingsService
  ) {
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.appSettings.getApiUrl()}/users`);
  }

  addUser(user: User): Observable<User> {
    const url = `${this.appSettings.getApiUrl()}/users`,
      body = JSON.stringify(user),
      options = {
        headers: new HttpHeaders({'Content-Type': 'application/json'})
      };

    return this.http.post<User>(url, body, options);
  }
}

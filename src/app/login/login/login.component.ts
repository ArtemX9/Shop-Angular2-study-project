import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from '../../core/services/auth.service';
import {Router} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  username = '';
  message = '';
  isLoggedIn: boolean;

  private sub: Subscription;

  constructor(
    private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
    this.isLoggedIn = this.authService.isLoggedIn;
    this.message = `Your are: ${this.isLoggedIn ? 'logged in' : 'logged out'}`;
  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

  onLogin() {
    this.message = 'Trying to log in ...';
    this.sub = this.authService
      .login(this.username)
      .subscribe(isLoggedIn => {
        if (isLoggedIn) {
          const url = this.authService.redirectUrl || '/admin';
          this.router.navigate([url]);
        } else {
          this.message = 'Cannot login: Incorrect user name';
        }
      });
  }

  onLogout() {
    this.authService.logout();
    this.message = 'Logged out';
    this.isLoggedIn = this.authService.isLoggedIn;
  }
}

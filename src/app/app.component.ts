import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/models/User';
import { HttpHeaders } from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Todo App Angular';

  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private router: Router
  ) {}

  loginWithGoogle(email?: string, password?: string) {
    this.authService
      .signInWithGoogle()
      .then((res: any) => {
        this.router.navigateByUrl('');
      })
      .catch((err: any) => {
        console.log(err);
      });
  }

  signupWithGoogle(username?: string, email?: string, password?: string) {}
}

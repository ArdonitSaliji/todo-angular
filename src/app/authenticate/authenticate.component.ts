import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authenticate',
  templateUrl: './authenticate.component.html',
  styleUrls: ['./authenticate.component.css'],
})
export class AuthenticateComponent {
  loginForm: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    confirmPassword: new FormControl('', [Validators.required]),
  });

  signupForm: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(private authService: AuthService, private router: Router) {}

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

  loginWithEmailAndPassword() {
    const userData = Object.assign(this.loginForm.value, {
      email: this.loginForm.value.username,
    });

    this.authService
      .signWithEmailAndPassword(userData)
      .then((res: any) => {
        this.router.navigateByUrl('home');
      })
      .catch((err: any) => {
        console.log(err);
      });
  }

  signupWithEmailAndPassword() {
    const userData = Object.assign(this.loginForm.value, {
      email: this.loginForm.value.username,
    });

    this.authService
      .signWithEmailAndPassword(userData)
      .then((res: any) => {
        this.router.navigateByUrl('');
      })
      .catch((err: any) => {
        console.log(err);
      });
  }

  signupWithGoogle(username?: string, email?: string, password?: string) {}
}

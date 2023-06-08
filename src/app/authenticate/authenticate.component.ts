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
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  signupForm: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    confirmPassword: new FormControl('', [Validators.required]),
  });

  constructor(private authService: AuthService, private router: Router) {}

  loginWithGoogle() {
    this.authService
      .signInWithGoogle()
      .then((res: any) => {
        this.router.navigateByUrl('/home');
      })
      .catch((err: any) => {
        console.log(err);
      });
  }

  loginWithEmailAndPassword() {
    const userData = Object.assign(this.loginForm.value, {
      email: this.loginForm.value.email,
    });
    console.log(userData);

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
    const userData = Object.assign(this.signupForm.value, {
      email: this.signupForm.value.email,
    });
    console.log(userData);
    this.authService
      .regusterWithEmailAndPassword(userData)
      .then((res: any) => {
        this.router.navigateByUrl('/');
      })
      .catch((err: any) => {
        console.log(err);
      });
  }
}

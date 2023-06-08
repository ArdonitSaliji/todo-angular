import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { GoogleAuthProvider } from 'firebase/auth';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private afs: AngularFireAuth) {}

  loggedInUser!: any;

  signInWithGoogle() {
    return this.afs.signInWithPopup(new GoogleAuthProvider());
  }

  regusterWithEmailAndPassword(user: { email: string; password: string }) {
    return this.afs.createUserWithEmailAndPassword(user.email, user.password);
  }

  signWithEmailAndPassword(user: { email: string; password: string }) {
    return this.afs.signInWithEmailAndPassword(user.email, user.password);
  }

  getLoggedInUser(user: any) {
    this.loggedInUser = user;
  }
}

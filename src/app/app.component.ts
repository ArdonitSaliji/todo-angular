import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/models/User';
import { HttpHeaders } from '@angular/common/http';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
    title = 'Todo App Angular';

    constructor(private http: HttpClient) {}

    httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          Authorization: 'my-auth-token'
        })
      };

    login(username?: string, email?:string, password?: string) {
        const req = this.http.post<User>('/api/login', [username || email, password], this.httpOptions)
    }

    signup(username?: string, email?:string, password?: string) {
        const req = this.http.post<User>('/api/signup', [username, email, password], this.httpOptions)
    }

    ngOnInit(): void {}
}

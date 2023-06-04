import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/models/Todo';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
    title = 'Todo App Angular';

    ngOnInit(): void {}
}

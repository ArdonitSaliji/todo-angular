import { Component, Input } from '@angular/core';
import { AppComponent } from '../app.component';
import { Todo } from 'src/models/Todo';
import { TodoListComponent } from '../todo-list/todo-list.component';

@Component({
    selector: 'app-single-todo',
    templateUrl: './single-todo.component.html',
    styleUrls: ['../app.component.css'],
})
export class SingleTodoComponent extends TodoListComponent {
    @Input() cTodos!: Todo[];
    @Input() Todos!: Todo[];
}

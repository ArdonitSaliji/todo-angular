import { Component, Input } from '@angular/core';
import { AppComponent } from '../app.component';
import { Todo } from 'src/models/Todo';
import { TodoListComponent } from '../todo-list/todo-list.component';
import { TodoService } from '../services/TodoService';

@Component({
    selector: 'app-single-todo',
    templateUrl: './single-todo.component.html',
    styleUrls: ['../app.component.css'],
})
export class SingleTodoComponent {
    @Input() Todos!: Todo[];

    constructor(private todoService: TodoService) {}

    deleteTodo(todoId: number) {
        console.log(todoId);
        this.todoService.deleteTodo(todoId);
    }
}

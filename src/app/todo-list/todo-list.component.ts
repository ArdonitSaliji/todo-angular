import { Component, NgModule, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Todo } from 'src/models/Todo';
import { TodoService } from '../services/TodoService';

@Component({
    selector: 'app-todo-list',
    templateUrl: './todo-list.component.html',
    styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
    constructor(private todoService: TodoService) {}

    get todos(): Todo[] {
        return this.todoService.todos;
    }

    get completedTodos(): Todo[] {
        return this.todoService.completedTodos;
    }

    ngOnInit(): void {}
}

import { Component, NgModule } from '@angular/core';
import { TodoListComponent } from '../todo-list/todo-list.component';
import { FormControl } from '@angular/forms';
import { Todo } from 'src/models/Todo';
import { TodoService } from '../services/TodoService';

@Component({
    selector: 'app-input-field',
    templateUrl: './input-field.component.html',
    styleUrls: ['./input-field.component.css'],
})
export class InputFieldComponent {
    inputValue = new FormControl('');

    constructor(private todoService: TodoService) {}

    addTodo(event: any) {
        const newTodo: Todo = {
            id: this.todoService.todos.length + 1,
            todo: this.inputValue.value || '',
            isDone: false,
        };

        event.preventDefault();

        this.todoService.addTodo(newTodo);
        this.inputValue.reset('');
    }
}

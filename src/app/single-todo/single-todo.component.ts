import { Component, Input } from '@angular/core';
import { AppComponent } from '../app.component';
import { Todo } from 'src/models/Todo';
import { TodoService } from '../services/TodoService';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-single-todo',
    templateUrl: './single-todo.component.html',
    styleUrls: ['../app.component.css'],
})

export class SingleTodoComponent {
    @Input() Todos!: Todo[];

    todoValue = new FormControl('')
    constructor(private todoService: TodoService) {}

    editTodo(todoId: number) {
        console.log(this.todoValue.value)
        this.todoService.editTodo(todoId, this.todoValue.value)
    }

    deleteTodo(todoId: number) {
        this.todoService.deleteTodo(todoId);
    }

    checkTodo(todoId: number) {
        this.todoService.checkTodo(todoId)
    }

}

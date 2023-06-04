import { Injectable } from '@angular/core';
import { Todo } from 'src/models/Todo';

@Injectable({
    providedIn: 'root',
})
export class TodoService {
    todos: Todo[] = [
        {
            id: 5,
            todo: 'Wash the dishes',
            isDone: false,
        },

        {
            id: 5,
            todo: 'Wash the dishe',
            isDone: false,
        },
        {
            id: 5,
            todo: 'Wash dishes',
            isDone: false,
        },
    ];

    completedTodos: Todo[] = [
        {
            id: 5,
            todo: 'Wash the dishes',
            isDone: false,
        },
    ];

    addTodo(newTodo: Todo) {
        this.todos.push(newTodo);
    }
}

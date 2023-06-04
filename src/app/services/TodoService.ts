import { Injectable } from '@angular/core';
import { Todo } from 'src/models/Todo';

@Injectable({
    providedIn: 'root',
})
export class TodoService {
    todo: Todo[] = [
        {
            id: 1,
            todo: 'Wash the dishes',
            isDone: false,
        },

        {
            id: 2,
            todo: 'Wash the dishe',
            isDone: false,
        },
        {
            id: 3,
            todo: 'Wash dishes',
            isDone: false,
        },
    ];

    completedTodos: Todo[] = [
        {
            id: 4,
            todo: 'Wash the dishes',
            isDone: false,
        },
    ];

    addTodo(newTodo: Todo) {
        this.todo.push(newTodo);
    }

    deleteTodo(todoId: number) {
        this.todo = this.todo.filter((element) => element.id !== todoId);
        this.completedTodos = this.completedTodos.filter((element) => element.id !== todoId);
    }
}

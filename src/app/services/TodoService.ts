import { Injectable } from '@angular/core';
import { Todo } from 'src/models/Todo';

@Injectable({
    providedIn: 'root',
})
export class TodoService {

    todo: Todo[] = [

    ];

    completedTodos: Todo[] = [
   
    ];

    addTodo(newTodo: Todo) {
        this.todo.push(newTodo);
    }

    deleteTodo(todoId: number) {
        this.todo = this.todo.filter((element) => element.id !== todoId);
        this.completedTodos = this.completedTodos.filter((element) => element.id !== todoId);
    }

    editTodo(todoId: number, input: any) {
      
        let selectedTodo = this.todo.filter((element) => element.id === todoId)[0] || this.completedTodos.filter((element) => element.id === todoId)[0];
        selectedTodo.edit = !selectedTodo.edit
        if(!input) {
            return
        }
        
        selectedTodo.todo = input

    }

    checkTodo(todoId:number) {
        let currentTodo = this.todo.filter((element) => element.id === todoId)[0] || this.completedTodos.filter((element) => element.id === todoId)[0];
        currentTodo.isDone = !currentTodo.isDone
    }
}

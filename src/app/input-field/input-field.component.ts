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
    if (!this.inputValue.value) {
      return;
    }
    const newTodo: Todo = {
      todoId: this.todoService.todo.length + 2,
      text: this.inputValue.value,
      isDone: false,
      isEdit: false,
      userId: 53,
      created_at: '34343',
      updated_at: '235',
    };

    event.preventDefault();

    this.todoService.addTodo(newTodo);
    this.inputValue.reset('');
  }
}

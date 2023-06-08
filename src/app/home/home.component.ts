import { Component } from '@angular/core';
import { Todo } from 'src/models/Todo';
import { TodoService } from '../services/TodoService';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  todo: Todo[] = [];

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.todoService.getAll().subscribe((data) => {
      console.log(data);
      this.todo = data;
      this.todoService.setTodos(data);
    });
  }
}

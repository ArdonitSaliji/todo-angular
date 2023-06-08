import { Injectable } from '@angular/core';
import { Todo } from 'src/models/Todo';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor(
    private db: AngularFireDatabase,
    private authService: AuthService
  ) {}

  todo!: Todo[];

  getAll(): Observable<Todo[]> {
    return this.db
      .list<Todo>('/todos')
      .snapshotChanges()
      .pipe(
        map((x) =>
          x.map((y: any) => ({
            todoId: y.payload.key,
            userId: this.authService.getUserId(),
            ...(y.payload.val() as Todo),
          }))
        )
      );
  }

  setTodos(todo: Todo[]) {
    this.todo = todo;
  }

  addTodo(newTodo: Todo) {
    this.db.list<Todo>('/todos').push(newTodo);
  }

  deleteTodo(todoId: number) {
    this.db.object<Todo>('/todos/' + todoId).remove();
  }

  editTodo(todoId: number, input: any) {
    let selectedTodo = this.todo.filter(
      (element) => element.todoId === todoId
    )[0];

    selectedTodo.isEdit = !selectedTodo.isEdit;
    if (!input) {
      return;
    }

    selectedTodo.text = input;
  }

  checkTodo(todoId: number) {
    let currentTodo = this.todo.filter(
      (element) => element.todoId === todoId
    )[0];
    currentTodo.isDone = !currentTodo.isDone;
  }
}

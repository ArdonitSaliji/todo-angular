import { Component, NgModule, OnInit } from '@angular/core';
import { Todo } from 'src/models/Todo';
import { TodoService } from '../services/TodoService';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
    selector: 'app-todo-list',
    templateUrl: './todo-list.component.html',
    styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
    constructor(private todoService: TodoService) {}

    get todos(): Todo[] {
        return this.todoService.todo;
    }

    get completedTodos(): Todo[] {
        return this.todoService.completedTodos;
    }

    drop(event: CdkDragDrop<any[]>) {
        if (event.previousContainer === event.container) {
            moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
        } else {
            transferArrayItem(
                event.previousContainer.data,
                event.container.data,
                event.previousIndex,
                event.currentIndex
            );
        }
    }

    ngOnInit(): void {}
}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputFieldComponent } from './input-field/input-field.component';
import { SingleTodoComponent } from './single-todo/single-todo.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
@NgModule({
    declarations: [AppComponent, InputFieldComponent, SingleTodoComponent, TodoListComponent],
    imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, DragDropModule, MatIconModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}

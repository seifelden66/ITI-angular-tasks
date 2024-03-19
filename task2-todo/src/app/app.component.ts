import { Component, EventEmitter, Output } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { TodoListComponent } from './todo-list/todo-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TodoFormComponent, TodoListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'task2-todo';
  parentArr: any[] = [];
  @Output() todoDeleted = new EventEmitter<number>();

  onTodoAdded(arr: any[]) {
    this.parentArr = arr; 
  }
  deleteTodo(index: number) {
    this.parentArr.splice(index, 1);
    this.todoDeleted.emit(index);  // Emit the deleted item's index
  }
}

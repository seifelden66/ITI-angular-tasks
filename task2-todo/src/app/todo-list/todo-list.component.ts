import { Component, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})
export class TodoListComponent {
  @Input() todoList: any[] = [];
  @Input() todoDeleted!: EventEmitter<number>; // Type assertion for clarity

  deleteTodo(index: number) {
    // Emit the delete event with the index (optional, if needed in parent)
    // this.todoDeleted.emit(index);  // Uncomment if needed

    // Remove the item locally based on the index received from parent
    this.todoList.splice(index, 1);
  }

}

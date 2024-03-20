import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './todo-form.component.html',
  styleUrl: './todo-form.component.scss'
})
export class TodoFormComponent {
  todo:any=""
  arr:any[] = []
  @Output() todoAdded = new EventEmitter<any[]>();

  submitTodo() {
    this.arr.push(this.todo)  
    this.todo="" 
    this.todoAdded.emit(this.arr);
  }
  reset(){
    this.todo = ""
  }

}

import { Component, OnInit } from '@angular/core';
import { Todo } from './../../modules/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodosComponent implements OnInit {

  todos!: Todo[];

  inputTodo:string = "";

  draggedIndex: number | null = null;
  dropIndex: number | null = null;

  constructor() { }

  ngOnInit(): void {
    this.todos =  [
      {
        content: 'First todo',
        completed: false
      },
      {
        content: 'Second todo',
        completed: false 
      }
    ]
  }

  toggleDone (id:number) {
    this.todos.map((v,i) => {
      if (i==id) v.completed = !v.completed;

      return v;
    })
  }
  deleteTodo (id:number) {
    this.todos = this.todos.filter((v ,i) => i !== id);
  } 

  addTodo () {
    this.todos.push({
      content:this.inputTodo,
      completed: false
    })
    this.inputTodo="";
  }
  onDragStart(event: DragEvent, index: number) {
    this.draggedIndex = index;
  }

  onDragOver(event: DragEvent, index: number) {
    event.preventDefault();
    this.dropIndex = index;
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    if (this.draggedIndex !== null && this.dropIndex !== null) {
      const todosCopy = [...this.todos];
      const draggedTodo = todosCopy[this.draggedIndex];
      todosCopy.splice(this.draggedIndex, 1);
      todosCopy.splice(this.dropIndex, 0, draggedTodo);
      this.todos = todosCopy;
      this.draggedIndex = null;
      this.dropIndex = null;
    }
  }
}

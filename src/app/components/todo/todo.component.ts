import { Component, OnInit } from '@angular/core';
import { Todo } from './../../modules/Todo'; // Import the Todo interface

@Component({
  selector: 'app-todos',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodosComponent implements OnInit {

  todos!: Todo[]; // Declare a todos array of type Todo

  inputTodo:string = ""; // Declare an inputTodo string for storing user input

  draggedIndex: number | null = null; // Store the index of the dragged todo item
  dropIndex: number | null = null; // Store the index of the drop target todo item

  constructor() { }

  ngOnInit(): void {
    // Initialize the todos array with some example data
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
    // Update the completed state of the todo item with the given id
    this.todos.map((v,i) => {
      if (i==id) v.completed = !v.completed;

      return v;
    })
  }

  deleteTodo (id:number) {
    // Remove the todo item with the given id from the todos array
    this.todos = this.todos.filter((v ,i) => i !== id);
  } 

  addTodo () {
    // Add a new todo item to the end of the todos array
    this.todos.push({
      content:this.inputTodo,
      completed: false
    })
    this.inputTodo=""; // Clear the inputTodo string after adding the new todo
  }

  onDragStart(event: DragEvent, index: number) {
    // Store the index of the dragged todo item
    this.draggedIndex = index;
  }

  onDragOver(event: DragEvent, index: number) {
    event.preventDefault();
    // Store the index of the drop target todo item
    this.dropIndex = index;
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    if (this.draggedIndex !== null && this.dropIndex !== null) {
      // Create a copy of the todos array and move the dragged todo to the drop target index
      const todosCopy = [...this.todos];
      const draggedTodo = todosCopy[this.draggedIndex];
      todosCopy.splice(this.draggedIndex, 1);
      todosCopy.splice(this.dropIndex, 0, draggedTodo);
      this.todos = todosCopy;
      this.draggedIndex = null; // Reset the draggedIndex after the drop
      this.dropIndex = null; // Reset the dropIndex after the drop
    }
  }
}

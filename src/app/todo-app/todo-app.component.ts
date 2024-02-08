import { Component } from '@angular/core';
import { Todo } from '../models/todo.model';

@Component({
  selector: 'todo-app',
  templateUrl: './todo-app.component.html',
  styleUrls: ['./todo-app.component.css'],
})
export class TodoAppComponent {
  todos: Todo[] = [
    { id: 1, text: 'Learn Angular', completed: false },
    { id: 2, text: 'Build a todo app', completed: false },
    { id: 3, text: 'Deploy the app', completed: false },
  ];

  completedTodos: Todo[] = [];

  newTodoText: string = '';

  setTaskCompleted(todo: Todo) {
    todo.completed = true;
    this.completedTodos.push(todo);
    this.todos = this.todos.filter((item) => item !== todo);
  }

  setTaskUncompleted(todo: Todo) {
    todo.completed = false;
    this.todos.push(todo);
    this.completedTodos = this.completedTodos.filter((item) => item !== todo);
  }

  deleteTask(todo: Todo) {
    this.completedTodos = this.completedTodos.filter((item) => item !== todo);
  }

  addTask() {
    if (this.newTodoText) {
      const newTodo: Todo = {
        id: this.todos.length + 1,
        text: this.newTodoText,
        completed: false,
      };
      this.todos.push(newTodo);
      this.newTodoText = '';
    }
  }
}

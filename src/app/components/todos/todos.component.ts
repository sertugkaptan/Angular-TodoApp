import { Component, OnInit, input } from '@angular/core';
import { Todo } from '../../models/Todo';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent implements OnInit {
  todos: Todo[];
  inputTodo: string | undefined;

  constructor() {
    this.todos = [];
  }
  ngOnInit(): void {
    this.todos = [{
      content: 'First Todo',
      completed: false
    }, {
      content: 'Second Todo',
      completed: true
    }
    ];
  }

  toggleDone(id: number) {
    this.todos.map((v, i) => {
      if (i == id) {
        v.completed = !v.completed;
      }
      return v;
    })
  }

  deleteTodo(id: number) {
    this.todos = this.todos.filter((v, i) => i != id);
  }

  addTodo(){
    let todo={content:this.inputTodo,completed:false};
    this.todos.push(todo);

    this.inputTodo = "";
  }
}

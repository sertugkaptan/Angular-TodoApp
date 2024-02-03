import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo';
@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent implements OnInit{
  todos:Todo[];
  
  constructor(){
    this.todos = [];
  }

  ngOnInit(): void {
    this.todos= [{
      id:0,
      content: 'First Todo',
      completed:false
    },{
      id:0,
      content: 'Second Todo',
      completed:true
    }
  ];
  }

}

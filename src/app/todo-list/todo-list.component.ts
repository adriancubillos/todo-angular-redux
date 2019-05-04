import { Component, OnInit } from '@angular/core';
import { select, NgRedux } from '@angular-redux/store';
import { ITodo } from '../todo';
import { IAppState } from '../store';
import { ADD_TODOS, TOGGLE_TODOS, REMOVE_TODOS } from '../actions';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: [ './todo-list.component.css' ]
})
export class TodoListComponent implements OnInit {
  @select() todos;
  model: ITodo = {
    id: 0,
    description: '',
    responsible: '',
    priority: 'low',
    isCompleted: false
  };
  constructor(private ngRedux: NgRedux<IAppState>) {}
  ngOnInit() {}
  onSubmit() {
    this.ngRedux.dispatch({ type: ADD_TODOS, todo: this.model });
  }
  toggleTodo(todo) {
    this.ngRedux.dispatch({ type: TOGGLE_TODOS, id: todo.id });
  }
  removeTodo(todo) {
    this.ngRedux.dispatch({ type: REMOVE_TODOS, id: todo.id });
  }
}

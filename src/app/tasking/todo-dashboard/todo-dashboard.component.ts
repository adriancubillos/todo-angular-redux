import { Component, OnInit } from '@angular/core';
import { select, NgRedux } from '@angular-redux/store';
import { IAppState } from '../../store';
import { REMOVE_ALL_TODOS } from '../../actions';

@Component({
  selector: 'app-todo-dashboard',
  templateUrl: './todo-dashboard.component.html',
  styleUrls: [ './todo-dashboard.component.css' ]
})
export class TodoDashboardComponent implements OnInit {
  @select() todos;
  @select() lastUpdate;
  constructor(private ngRedux: NgRedux<IAppState>) {}
  ngOnInit() {}
  clearTodos() {
    this.ngRedux.dispatch({ type: REMOVE_ALL_TODOS });
  }
}

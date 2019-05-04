import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgRedux, NgReduxModule } from '@angular-redux/store';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { IAppState, rootReducer, INITIAL_STATE } from './store';
import { TodoDashboardComponent } from './todo-dashboard/todo-dashboard.component';
import { TodoListComponent } from './todo-list/todo-list.component';

@NgModule({
  declarations: [ AppComponent, TodoDashboardComponent, TodoListComponent ],
  imports: [ BrowserModule, NgReduxModule, FormsModule ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule {
  constructor(ngRedux: NgRedux<IAppState>) {
    ngRedux.configureStore(rootReducer, INITIAL_STATE);
  }
}

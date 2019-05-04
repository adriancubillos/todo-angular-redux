import { NgRedux, NgReduxModule, DevToolsExtension } from '@angular-redux/store';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { IAppState, INITIAL_STATE, rootReducer } from './store';
import { TodoDashboardComponent } from './tasking/todo-dashboard/todo-dashboard.component';
import { TodoListComponent } from './tasking/todo-list/todo-list.component';

@NgModule({
  declarations: [ AppComponent, TodoDashboardComponent, TodoListComponent ],
  imports: [ BrowserModule, NgReduxModule, FormsModule ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule {
  constructor(ngRedux: NgRedux<IAppState>, devTools: DevToolsExtension) {
    const storeEnhancers = devTools.isEnabled() // <- New
      ? [ devTools.enhancer() ] // <- New
      : []; // <- New

    console.log('INITIAL_STATE', INITIAL_STATE);

    ngRedux.configureStore(rootReducer, INITIAL_STATE, [], storeEnhancers);
  }
}

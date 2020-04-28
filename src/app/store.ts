import { combineReducers } from 'redux';

import { taskingReducer, ITaskingState, TASKING_INITIAL_STATE } from './tasking/store';

export interface IAppState {
  tasking: ITaskingState;
}

export const INITIAL_STATE: IAppState = {
  tasking: TASKING_INITIAL_STATE
};

export const rootReducer = combineReducers({
  tasking: taskingReducer
});

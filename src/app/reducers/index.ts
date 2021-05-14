import { ActionReducerMap } from '@ngrx/store';
import * as fromCounter from './counter.reducer';


export interface ApplicationState {
  count: number
}

export const reducers: ActionReducerMap<ApplicationState> = {
  count: fromCounter.counterReducer
}


export const selectCurrent = (state: ApplicationState) => state.count;

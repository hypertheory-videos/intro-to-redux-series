import { ActionReducerMap, createSelector } from '@ngrx/store';
import * as fromCounter from './counter.reducer';


export interface ApplicationState {
  count: fromCounter.CounterState
}

export const reducers: ActionReducerMap<ApplicationState> = {
  count: fromCounter.counterReducer
}


const selectCounterBranch = (state: ApplicationState) => state.count;


export const selectCurrent = createSelector(
  selectCounterBranch,
  b => b.current
)

export const selectBy = createSelector(
  selectCounterBranch,
  b => b.by
)

import { ActionReducerMap, createSelector } from '@ngrx/store';
import * as fromCounter from './counter.reducer';
import * as fromCountersList from './counter-list.reducer';

export interface ApplicationState {
  count: fromCounter.CounterState,
  counterList: fromCountersList.CountersState
}

export const reducers: ActionReducerMap<ApplicationState> = {
  count: fromCounter.counterReducer,
  counterList: fromCountersList.countersReducers
}


const selectCounterBranch = (state: ApplicationState) => state.count;
const selectListBranch = (state: ApplicationState) => state.counterList;


export const { selectAll: selectAllListCounters } = fromCountersList.adapter.getSelectors(selectListBranch);

export const selectCurrent = createSelector(
  selectCounterBranch,
  b => b.current
)

export const selectBy = createSelector(
  selectCounterBranch,
  b => b.by
)

import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';
import { CounterState } from './counter.reducer';
import * as actions from '../actions/counters-list.actions';

export interface CountersEntity extends CounterState {
  id: string;
  name: string,
}


export interface CountersState extends EntityState<CountersEntity> {
  // any additional properties here.
}

export const adapter = createEntityAdapter<CountersEntity>();
const initialState: CountersState = adapter.getInitialState();


const _countersReducer = createReducer(
  initialState,
  on(actions.addCounterToList, (s, a) => adapter.addOne(a.payload, s)),
  on(actions.incrementListCounter, (s, a) => adapter.updateOne({
    id: a.payload.id,
    changes: {
      current: a.payload.current + a.payload.by
    }
  }, s)),
  on(actions.deccrementListCounter, (s, a) => adapter.updateOne({
    id: a.payload.id,
    changes: {
      current: a.payload.current - a.payload.by
    }
  }, s))
)


export function countersReducers(state: CountersState = initialState, action: Action): CountersState {
  return _countersReducer(state, action)
}




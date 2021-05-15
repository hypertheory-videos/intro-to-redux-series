import { Action, createReducer, on } from "@ngrx/store";
import * as actions from '../actions/counter.actions';

export interface CounterState {
  current: number,
  by: number
}

export const initialState: CounterState = {
  current: 1,
  by: 1
}

const _counterReducer = createReducer(
  initialState,
  on(actions.countIncremented, (state) => ({ ...state, current: state.current + state.by })),
  on(actions.countDecremented, (state) => ({ ...state, current: state.current - state.by })),
  on(actions.countSetCountBy, (state, action) => ({ ...state, by: action.by }))
)

export function counterReducer(state: CounterState | undefined, action: Action): CounterState {
  return _counterReducer(state, action);
}

import { Action, createReducer, on } from "@ngrx/store";
import * as actions from '../actions/counter.actions';


export const initialState = 0;

const _counterReducer = createReducer(
  initialState,
  on(actions.countIncremented, (state) => state + 1),
  on(actions.countDecremented, (state) => state - 1)
)

export function counterReducer(state: number | undefined, action: Action): number {
  return _counterReducer(state, action);
}

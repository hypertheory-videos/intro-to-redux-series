import { createAction, props } from "@ngrx/store";
import { CountersEntity } from "../reducers/counter-list.reducer";
import * as cuid from 'cuid';



export const addCounterToList = createAction(
  '[counter list] add counter to list',
  ({ name }: { name: string }) => ({
    payload: {
      id: cuid(),
      name,
      by: 1,
      current: 0
    } as CountersEntity
  })
)

export const incrementListCounter = createAction(
  '[counter list] increment list counter',
  props<{ payload: CountersEntity }>()
)



export const deccrementListCounter = createAction(
  '[counter list] deccrement list counter',
  props<{ payload: CountersEntity }>()
)

export const loadSavedCounters = createAction(
  '[counter list] load saved counters'
)

export const loadSavedCountersSucceeded = createAction(
  '[counter list] load saved counters succeeded',
  props<{ payload: CountersEntity[] }>()
)

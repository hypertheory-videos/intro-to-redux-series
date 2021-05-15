import { createAction, props } from "@ngrx/store";
import { CountersEntity } from "../reducers/counter-list.reducer";


let id = 1;

export const addCounterToList = createAction(
  '[counter list] add counter to list',
  ({ name }: { name: string }) => ({
    payload: {
      id: (id++).toString(),
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

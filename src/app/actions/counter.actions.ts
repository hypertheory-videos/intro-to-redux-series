import { createAction } from '@ngrx/store';


export const countIncremented = createAction(
  '[counter] count incremented'
)

export const countDecremented = createAction(
  '[counter] count decremented'
)

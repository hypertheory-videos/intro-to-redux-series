import { createAction, props } from '@ngrx/store';


export const countIncremented = createAction(
  '[counter] count incremented'
)

export const countDecremented = createAction(
  '[counter] count decremented'
)


export const countSetCountBy = createAction(
  '[counter] count set count by',
  props<{ by: number }>()
)

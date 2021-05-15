import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { CountersDataService } from "../services/counters-data";
import * as actions from '../actions/counters-list.actions';
import { map, switchMap } from "rxjs/operators";
import { dbConfig } from "../db-config";
@Injectable()
export class CountersEffects {

  loadCounters$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.loadSavedCounters),
      switchMap(() => this.service.getAll()
        .pipe(
          map(payload => actions.loadSavedCountersSucceeded({ payload }))
        )
      )
    )

  )

  addCounter$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.addCounterToList),
      map(action => action.payload),
      switchMap(counter => this.service.add(counter))
    )
    , { dispatch: false }
  );

  incrementCount$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.incrementListCounter),
      map(a => a.payload.id),
      switchMap(id => this.service.incrementCurrent(id))
    )
    , { dispatch: false }

  )

  decrementCount$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.deccrementListCounter),
      map(a => a.payload.id),
      switchMap(id => this.service.decrementCurrent(id))
    )
    , { dispatch: false }

  )

  constructor(private actions$: Actions, private service: CountersDataService) { }
}

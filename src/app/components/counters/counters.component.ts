import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ApplicationState, selectAllListCounters } from 'src/app/reducers';
import { CountersEntity } from 'src/app/reducers/counter-list.reducer';
import * as actions from '../../actions/counters-list.actions';
@Component({
  selector: 'app-counters',
  templateUrl: './counters.component.html',
  styleUrls: ['./counters.component.css']
})
export class CountersComponent implements OnInit {

  counters$!: Observable<CountersEntity[]>;

  form = this.formBuilder.group({
    name: ['']
  });
  constructor(
    private formBuilder: FormBuilder,
    private store: Store<ApplicationState>
  ) {
    this.store.dispatch(actions.loadSavedCounters());
  }

  ngOnInit(): void {
    this.counters$ = this.store.select(selectAllListCounters);
  }

  submit(focusMe: HTMLInputElement) {
    const name = this.form.get('name')?.value;

    this.store.dispatch(actions.addCounterToList({ name }));
    this.form.reset();
    focusMe.focus();

  }

  decrement(counter: CountersEntity): void {
    this.store.dispatch(actions.deccrementListCounter({ payload: counter }));
  }

  increment(counter: CountersEntity): void {
    this.store.dispatch(actions.incrementListCounter({ payload: counter }));
  }

}

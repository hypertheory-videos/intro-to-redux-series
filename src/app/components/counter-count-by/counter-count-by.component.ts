import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { countSetCountBy } from 'src/app/actions/counter.actions';
import { ApplicationState, selectBy } from 'src/app/reducers';

@Component({
  selector: 'app-counter-count-by',
  templateUrl: './counter-count-by.component.html',
  styleUrls: ['./counter-count-by.component.css']
})
export class CounterCountByComponent implements OnInit {

  by$!: Observable<number>;
  constructor(private store: Store<ApplicationState>) { }

  ngOnInit(): void {
    this.by$ = this.store.select(selectBy);
  }

  setCountBy(by: number): void {
    this.store.dispatch(countSetCountBy({ by }));
  }

}

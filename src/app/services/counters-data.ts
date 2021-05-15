import { Injectable } from "@angular/core";
import { NgxIndexedDBService } from "ngx-indexed-db";
import { CountersEntity } from "../reducers/counter-list.reducer";
import { map, switchMap } from 'rxjs/operators';
import { Observable } from "rxjs";

@Injectable()
export class CountersDataService {


  getAll() {
    return this.service.getAll('counters') as Observable<CountersEntity[]>;
  }
  add(counter: CountersEntity) {
    return this.service.addItem('counters', counter);
  }

  incrementCurrent(id: string) {
    return this.service.getByID('counters', id).pipe(
      map(c => c as CountersEntity),
      map(c => {
        c.current += 1;
        return c;
      }),
      switchMap(c => this.service.update('counters', c))
    )
  }

  decrementCurrent(id: string) {
    return this.service.getByID('counters', id).pipe(
      map(c => c as CountersEntity),
      map(c => {
        c.current -= 1;
        return c;
      }),
      switchMap(c => this.service.update('counters', c))
    )
  }

  constructor(private service: NgxIndexedDBService) { }
}

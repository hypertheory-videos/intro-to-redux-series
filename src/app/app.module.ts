import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { reducers } from './reducers';
import { counterReducer } from './reducers/counter.reducer';
import { CounterComponent } from './components/counter/counter.component';
import { CounterCountByComponent } from './components/counter-count-by/counter-count-by.component';
import { CountersComponent } from './components/counters/counters.component';
import { SingleComponent } from './components/single/single.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxIndexedDBModule } from 'ngx-indexed-db';
import { dbConfig } from './db-config';
import { CountersDataService } from './services/counters-data';
import { EffectsModule } from '@ngrx/effects';
import { CountersEffects } from './effects/counters-effects';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    CounterCountByComponent,
    CountersComponent,
    SingleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument(),
    NgxIndexedDBModule.forRoot(dbConfig),
    EffectsModule.forRoot([CountersEffects])
  ],
  providers: [CountersDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

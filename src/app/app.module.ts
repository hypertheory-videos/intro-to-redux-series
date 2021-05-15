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

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    CounterCountByComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

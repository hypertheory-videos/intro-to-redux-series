import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterComponent } from './components/counter/counter.component';
import { CountersComponent } from './components/counters/counters.component';
import { SingleComponent } from './components/single/single.component';

const routes: Routes = [
  {
    path: 'single',
    component: SingleComponent
  },
  {
    path: 'list',
    component: CountersComponent
  },
  {
    path: '**',
    redirectTo: 'single'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

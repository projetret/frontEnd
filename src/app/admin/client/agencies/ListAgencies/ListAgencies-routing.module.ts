import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListAgenciesComponent } from './ListAgencies.component';

const routes: Routes = [
  {
    path: '',
    component: ListAgenciesComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListAgenciesRoutingModule {}

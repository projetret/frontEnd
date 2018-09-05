import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListAgenciesComponent } from './ListAgencies/ListAgencies.component';
import { AgenciesComponent } from './agencies.component';
import { EditAgenciesComponent } from './EditAgencies/EditAgencies.component';
const routes: Routes = [
  {
    path: '',
    component: AgenciesComponent
  },
  {
    path: 'ListAgencies',
    component: ListAgenciesComponent
  },
  {
    path: 'EditAgencies',
    component: EditAgenciesComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgenciesRoutingModule {}

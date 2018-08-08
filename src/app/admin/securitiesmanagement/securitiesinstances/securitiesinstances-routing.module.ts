import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecuritiesinstancesComponent } from './securitiesinstances.component';

const routes: Routes = [
  {
    path: '',
    component: SecuritiesinstancesComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecuritiesinstancesRoutingModule { }

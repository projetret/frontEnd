import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DistributorsComponent } from './distributors.component';
import { ListDistributorsComponent } from './ListDistributors/ListDistributors.component';
const routes: Routes = [
  {
    path: '',
    component: DistributorsComponent
  },
  {
    path: 'ListDistributors',
    component: ListDistributorsComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DistributorsRoutingModule { }

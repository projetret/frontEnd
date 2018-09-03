import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListDistributorsComponent } from './ListDistributors.component';

const routes: Routes = [
  {
    path: '',
    component: ListDistributorsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListDistributorsRoutingModule {}

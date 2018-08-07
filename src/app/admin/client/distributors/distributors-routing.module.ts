import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DistributorsComponent } from './distributors.component';

const routes: Routes = [
  {
    path: '',
    component: DistributorsComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DistributorsRoutingModule { }

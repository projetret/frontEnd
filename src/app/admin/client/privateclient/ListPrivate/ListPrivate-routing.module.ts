import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListPrivateComponent } from './ListPrivate.component';

const routes: Routes = [
  {
    path: '',
    component: ListPrivateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListPrivateRoutingModule {}

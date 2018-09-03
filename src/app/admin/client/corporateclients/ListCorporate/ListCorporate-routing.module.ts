import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListCorporateComponent } from './ListCorporate.component';

const routes: Routes = [
  {
    path: '',
    component: ListCorporateComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListCorporateRoutingModule {}

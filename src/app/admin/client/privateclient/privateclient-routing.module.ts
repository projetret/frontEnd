import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrivateclientComponent } from './privateclient.component';

const routes: Routes = [
  {
    path: '',
    component: PrivateclientComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateclientRoutingModule { }

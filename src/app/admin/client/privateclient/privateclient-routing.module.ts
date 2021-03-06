import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrivateclientComponent } from './privateclient.component';
import { ListPrivateComponent } from './ListPrivate/ListPrivate.component';

const routes: Routes = [
  {
    path: '',
    component: PrivateclientComponent
  },
  {
    path: 'ListPrivate',
    component: ListPrivateComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateclientRoutingModule { }

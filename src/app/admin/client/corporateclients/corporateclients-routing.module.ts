import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CorporateclientsComponent } from './corporateclients.component';

const routes: Routes = [
  {
    path: '',
    component: CorporateclientsComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CorporateclientsRoutingModule { }

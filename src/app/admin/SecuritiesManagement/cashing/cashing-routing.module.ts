import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CashingComponent } from './cashing.component';

const routes: Routes = [
  {
    path: '',
    component: CashingComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CashingRoutingModule { }

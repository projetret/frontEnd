import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { BillComponent } from './bill/bill.component';
const routes: Routes = [
  {
    path: 'Bill',
     component: BillComponent,
    data: {
      title: 'Bill'
    },    
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FinanceRoutingModule { }






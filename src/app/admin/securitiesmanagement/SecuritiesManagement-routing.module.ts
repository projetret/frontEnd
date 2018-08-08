import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CashingComponent } from './cashing/cashing.component';
import { SecuritiesinInstancesComponent } from './securities-instances/securities-instances.component';

const routes: Routes = [
  {
    path: 'Cashing',
     component: CashingComponent,
    data: {
      title: 'Cashing'
    },    
  },
  {
    path: 'SecuritiesinInstances',
     component: SecuritiesinInstancesComponent,
    data: {
      title: 'SecuritiesinInstances'
    },    
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [RouterModule],
})
  
export class SecuritiesManagementRoutingModule { }


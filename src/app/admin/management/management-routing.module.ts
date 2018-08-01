import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ManagementModule } from './management.module';
const routes: Routes = [
  {
    path: 'Management',
     component: ManagementModule,
    data: {
      title: 'Management'
    },    
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManagementRoutingModule { }


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CashingComponent } from '../SecuritiesManagement/cashing/cashing.component';
import { SecuritiesinInstancesComponent } from './securities-instances/securities-instances.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CashingComponent, SecuritiesinInstancesComponent]
})
export class SecuritiesManagementModule { }

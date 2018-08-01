import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgencyModule } from './agency/agency.module';
import { ClientModule } from './client/client.module';
import { FinanceModule } from './finance/finance.module';
import { ManagementModule } from './management/management.module';
import { SecuritiesManagementModule } from './SecuritiesManagement/SecuritiesManagement.module';

@NgModule({
  imports: [
 CommonModule
  ],
  declarations: [AgencyModule,ClientModule,FinanceModule,ManagementModule,SecuritiesManagementModule]
})
export class AdminModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgenciesRoutingModule } from './agencies-routing.module';
import { AgenciesComponent } from './agencies.component';
import { ListAgenciesComponent } from './ListAgencies/ListAgencies.component';

@NgModule({
  imports: [CommonModule, AgenciesRoutingModule],
  declarations: [AgenciesComponent, ListAgenciesComponent]
})
export class AgenciesModule {}

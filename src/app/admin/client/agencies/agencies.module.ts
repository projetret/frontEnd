import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AgenciesRoutingModule } from './agencies-routing.module';
import { AgenciesComponent } from './agencies.component';
import { ListAgenciesComponent } from './ListAgencies/ListAgencies.component';
import { EditAgenciesComponent } from './EditAgencies/EditAgencies.component';

@NgModule({
  imports: [CommonModule, FormsModule, AgenciesRoutingModule],
  declarations: [
    AgenciesComponent,
    ListAgenciesComponent,
    EditAgenciesComponent
  ]
})
export class AgenciesModule {}

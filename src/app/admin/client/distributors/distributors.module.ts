import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DistributorsRoutingModule } from './distributors-routing.module';
import { DistributorsComponent } from './distributors.component';
import { ListDistributorsComponent } from './ListDistributors/ListDistributors.component';
@NgModule({
  imports: [
    CommonModule,
    DistributorsRoutingModule
  ],
  declarations: [DistributorsComponent, ListDistributorsComponent]
})
export class DistributorsModule { }

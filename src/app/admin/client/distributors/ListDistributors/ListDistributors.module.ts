import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListDistributorsRoutingModule } from './ListDistributors-routing.module';
import { ListDistributorsComponent} from "./ListDistributors.component";
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  imports: [
    HttpModule,
    HttpClientModule,
    CommonModule,
    ListDistributorsRoutingModule
  ],

  declarations: [ListDistributorsComponent]
})
export class ListDistributorsModule {}

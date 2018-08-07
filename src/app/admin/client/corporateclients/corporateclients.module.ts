import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CorporateclientsRoutingModule } from './corporateclients-routing.module';
import { CorporateclientsComponent } from './corporateclients.component';

@NgModule({
  imports: [
    CommonModule,
    CorporateclientsRoutingModule
  ],
  declarations: [CorporateclientsComponent]
})
export class CorporateclientsModule { }

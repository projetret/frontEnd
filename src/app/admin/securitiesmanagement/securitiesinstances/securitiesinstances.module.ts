import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecuritiesinstancesRoutingModule } from './securitiesinstances-routing.module';
import { SecuritiesinstancesComponent } from './securitiesinstances.component';

@NgModule({
  imports: [
    CommonModule,
    SecuritiesinstancesRoutingModule
  ],
  declarations: [SecuritiesinstancesComponent]
})
export class SecuritiesinstancesModule { }

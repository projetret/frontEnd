import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CashingRoutingModule } from './cashing-routing.module';
import { CashingComponent } from './cashing.component';

@NgModule({
  imports: [
    CommonModule,
    CashingRoutingModule
  ],
  declarations: [CashingComponent]
})
export class CashingModule { }

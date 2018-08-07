import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateclientRoutingModule } from './privateclient-routing.module';
import { PrivateclientComponent } from './privateclient.component';

@NgModule({
  imports: [
    CommonModule,
    PrivateclientRoutingModule
  ],
  declarations: [PrivateclientComponent]
})
export class PrivateclientModule { }

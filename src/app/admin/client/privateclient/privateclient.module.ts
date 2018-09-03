import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateclientRoutingModule } from './privateclient-routing.module';
import { PrivateclientComponent } from './privateclient.component';
import { ListPrivateComponent } from './ListPrivate/ListPrivate.component';

@NgModule({
  imports: [CommonModule, PrivateclientRoutingModule],
  declarations: [PrivateclientComponent, ListPrivateComponent]
})
export class PrivateclientModule {}

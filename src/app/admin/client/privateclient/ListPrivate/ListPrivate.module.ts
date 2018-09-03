import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListPrivateRoutingModule } from './ListPrivate-routing.module';
import { ListPrivateComponent} from "./ListPrivate.component";
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  imports: [
    HttpModule,
    HttpClientModule,
    CommonModule,
    ListPrivateRoutingModule
  ],

  declarations: [ListPrivateComponent]
})
export class ListPrivateModule {}

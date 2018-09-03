import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListCorporateRoutingModule } from './ListCorporate-routing.module';
import { ListCorporateComponent } from './ListCorporate.component';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  imports: [
    HttpModule,
    HttpClientModule,
    CommonModule,
    ListCorporateRoutingModule
  ],

  declarations: [ListCorporateComponent]
})
export class ListCorporateModule {}
